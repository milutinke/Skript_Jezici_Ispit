const { sequelize, ValidationError } = require('../models');
const CustomException = require('../exceptions/custom');
const Utils = require('../utils');

class TicketService {
    async createTicket(title, body, user) {
        let ticket;

        try {
            ticket = await sequelize.models.Ticket.create({ title, body, UserId: user.id });
        } catch (error) {
            if (error instanceof ValidationError)
                throw new Error(Utils.formatSequelizeError(error));
            else throw new Error(error);
        }

        ticket.user = req.user;
        delete ticket.UserId;

        return ticket;
    }

    async getTicket(id) {
        const ticket = await sequelize.models.Ticket.findOne({ where: { id } });

        if (!ticket)
            throw new Error('Invalid ticket!');

        const ticketCreator = await sequelize.models.User.findOne({ where: { id: ticket.UserId } });

        let ticketCopy = {
            id: ticket.id,
            title: ticket.title,
            body: ticket.body,
            status: ticket.status,
            user: ticketCreator ? {
                id: ticketCreator.id,
                fullName: ticketCreator.getFullName()
            } : "Deleted User",
            createdAt: ticket.createdAt,
            updatedAt: ticket.updatedAt
        };

        let returnData = {};
        returnData.ticket = ticketCopy;
        returnData.answers = await sequelize.models.TicketAnswer.findAll({ where: { TicketId: id } });

        if (returnData.answers) {
            for (let i = 0; i < returnData.answers.length; i++) {
                const user = await sequelize.models.User.findOne({ where: { id: returnData.answers[i].UserId } });

                if (!user)
                    returnData.answers[i].user = "Deleted User";
                else returnData.answers[i].user = {
                    id: user.id,
                    fullName: user.getFullName()
                };

                delete returnData.answers[i].UserId;
                delete returnData.answers[i].TicketId;
            }
        }

        return returnData;
    }

    async getAllTickets(user) {
        const ticketsCopies = [];
        const tickets = await sequelize.models.Ticket.findAll({ where: { UserId: user.id } });

        for (let t = 0; t < tickets.length; t++) {
            const ticket = tickets[t];
            const ticketCreator = await sequelize.models.User.findOne({ where: { id: ticket.UserId } });

            let ticketCopy = {
                id: ticket.id,
                title: ticket.title,
                body: ticket.body,
                status: ticket.status,
                user: ticketCreator ? {
                    id: ticketCreator.id,
                    fullName: ticketCreator.getFullName()
                } : "Deleted User",
                createdAt: ticket.createdAt,
                updatedAt: ticket.updatedAt
            };

            ticketsCopies.push(ticketCopy);
        }

        return ticketsCopies;
    }

    async postAnswer(ticketId, userId, body) {
        const foundTicket = await sequelize.models.Ticket.findOne({ where: { id: ticketId } });

        if (!foundTicket)
            throw new CustomException({ error: 'Invalid ticket!', forbidden: true });

        if (foundTicket.status === 0)
            throw new CustomException({ error: 'Ticket is closed, you can not answer to it anymore!', forbidden: true });

        if (foundTicket.UserId !== userId)
            throw new CustomException({ error: 'Forbidden', forbidden: true })

        let answer;

        try {
            answer = await sequelize.models.TicketAnswer.create({
                TicketId: ticketId,
                UserId: userId,
                body: body
            });
        } catch (error) {
            if (error instanceof ValidationError)
                throw new Error(Utils.formatSequelizeError(error));
            else throw new Error(error);
        }

        return answer;
    }

    async closeTicket(id) {
        const ticket = await sequelize.models.Ticket.findOne({ where: { id } });

        if (!ticket)
            throw new Error('Invalid ticket!');

        if (ticket.status === 0)
            throw new CustomException({ error: 'Ticket has already been closed!', forbidden: true });

        await ticket.update({
            status: 0
        });

        return true;
    }
}

module.exports = new TicketService();