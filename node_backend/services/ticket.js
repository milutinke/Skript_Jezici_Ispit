const { sequelize, ValidationError } = require('../models');
const CustomException = require('../exceptions/custom');
const Utils = require('../utils');
const moment = require('moment');

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
            user: ticketCreator ? ticketCreator.getFullName() : "Deleted User",
            createdAt: moment(ticket.createdAt).utc().format('YYYY-MM-DD hh:mm'),
            updatedAt: moment(ticket.updatedAt).utc().format('YYYY-MM-DD hh:mm')
        };

        let returnData = {};
        returnData.ticket = ticketCopy;
        returnData.answers = [];

        const answers = await sequelize.models.TicketAnswer.findAll({ where: { TicketId: id } });

        if (answers) {
            for (let i = 0; i < answers.length; i++) {
                const currentAnswer = answers[i];
                const user = await sequelize.models.User.findOne({ where: { id: currentAnswer.UserId } });

                let answerCopy = {};

                answerCopy.body = currentAnswer.body;

                if (!user)
                    answerCopy.user = "Deleted User";
                else answerCopy.user = user.getFullName();

                answerCopy.createdAt = moment(currentAnswer.createdAt).utc().format('YYYY-MM-DD hh:mm');
                answerCopy.updatedAt = moment(currentAnswer.updatedAt).utc().format('YYYY-MM-DD hh:mm');

                returnData.answers.push(answerCopy);
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
                user: ticketCreator ? ticketCreator.getFullName() : "Deleted User",
                createdAt: moment(ticket.createdAt).utc().format('YYYY-MM-DD hh:mm'),
                updatedAt: moment(ticket.updatedAt).utc().format('YYYY-MM-DD hh:mm'),
            };

            ticketsCopies.push(ticketCopy);
        }

        return ticketsCopies;
    }

    async postAnswer(ticketId, user, body) {
        const foundTicket = await sequelize.models.Ticket.findOne({ where: { id: ticketId } });

        if (!foundTicket)
            throw new CustomException({ error: 'Invalid ticket!', forbidden: true });

        if (foundTicket.status === 0)
            throw new CustomException({ error: 'Ticket is closed, you can not answer to it anymore!', forbidden: true });

        if (foundTicket.UserId !== user.id && !user.isAdmin)
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

    async closeTicket(id, user) {
        const ticket = await sequelize.models.Ticket.findOne({ where: { id } });

        if (!ticket)
            throw new Error('Invalid ticket!');

        if (ticket.status === 0)
            throw new CustomException({ error: 'Ticket has already been closed!', forbidden: true });

        if (ticket.UserId !== user.id && !user.isAdmin)
            throw new CustomException({ error: 'Forbidden', forbidden: true })

        await ticket.update({
            status: 0
        });

        return true;
    }
}

module.exports = new TicketService();