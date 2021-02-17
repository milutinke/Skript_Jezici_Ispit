const TicketService = require('../services/ticket');
const CustomException = require('../exceptions/custom');

class TicketController {
    async create(req, res) {
        try {
            const { title, body } = req.body;
            const ticket = await TicketService.createTicket(title, body, req.user);
            res.status(201).json({ ticket });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async postAnswer(req, res) {
        try {
            if (!req.params.id)
                throw new Error('Please provide a valid ticket id!');

            let id;
            try {
                id = parseInt(req.params.id);
            } catch (e2) {
                throw new Error('Invalid ticket!');
            }

            const { body } = req.body;
            const answer = await TicketService.postAnswer(id, req.user.id, body);
            res.status(201).json({ answer });
        } catch (error) {
            if (error instanceof CustomException)
                res.status(400).json(error.payload);
            else res.status(400).json({ error: error.message });
        }
    }

    async get(req, res) {
        try {
            if (!req.params.id)
                throw new Error('Please provide a valid ticket id!');

            res.status(200).json(await TicketService.getTicket(req.params.id));
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            res.status(200).json(await TicketService.getAllTickets(req.user));
        } catch (error) {
            console.log(error);
            res.status(404).json({ error: error.message });
        }
    }

    async close(req, res) {
        try {
            if (!req.params.id)
                throw new Error('Please provide a valid ticket id!');

            res.status(200).json(await TicketService.closeTicket(req.params.id));
        } catch (error) {
            if (error instanceof CustomException)
                res.status(400).json(error.payload);
            else res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new TicketController();