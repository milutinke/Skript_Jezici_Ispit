// Libraries
const Express = require('express');
const Configs = require('./config');
const Colors = require('colors');
const History = require('connect-history-api-fallback');
const Path = require('path');
const Cors = require('cors');

// Express Configuration and Instantiation
const expressApp = Express();

// Initialize the router
expressApp.use(Cors());
expressApp.use(Express.json());
require('./routes')(expressApp);

// Express Middelwares
expressApp.use(History);
expressApp.use(Configs.express.home_route, Express.static(Path.join(process.cwd(), Configs.express.static_dir)));

// Start the Express server
expressApp.listen(Configs.express.port, () => console.log(`Node server has been started on port: ${Configs.express.port}`.bgGreen.white));
