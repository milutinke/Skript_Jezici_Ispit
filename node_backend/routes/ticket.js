const Express = require('express');
const TicketController = require('../controllers/ticket');
const AuthMiddleware = require('../middleware/auth');

module.exports = expressInstance => {
    // Create ticket
    expressInstance.post(
        // Route
        '/api/ticket/create',

        // Middleware
        AuthMiddleware.handle,

        // Request handler
        TicketController.create
    );

    // Post an answer
    expressInstance.post(
        // Route
        '/api/ticket/answer/:id',

        // Middleware
        AuthMiddleware.handle,

        // Request handler
        TicketController.postAnswer
    );

    // Get a single ticket
    expressInstance.get(
        // Route
        '/api/ticket/:id',

        // Middleware
        AuthMiddleware.handle,

        // Request handler
        TicketController.get
    );

    // Get all ticket
    expressInstance.get(
        // Route
        '/api/ticket/',

        // Middleware
        AuthMiddleware.handle,

        // Request handler
        TicketController.getAll
    );

    // Close a specific ticket
    expressInstance.delete(
        // Route
        '/api/ticket/:id',

        // Middleware
        AuthMiddleware.handle,

        // Request handler
        TicketController.close
    );
};