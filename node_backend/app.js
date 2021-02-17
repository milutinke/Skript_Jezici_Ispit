// Libraries
const Express = require('express');
const Configs = require('./config');
const Colors = require('colors');
const History = require('connect-history-api-fallback');
const Path = require('path');
const Cors = require('cors');

// Express Configuration and Instantiation
const expressApp = Express();

// Express Configuration
expressApp.use(Cors());
expressApp.use(Express.json());
require('./routes')(expressApp);
expressApp.use('/js', Express.static(Path.join(__dirname, Configs.express.static_dir + '/js')));
expressApp.use('/css', Express.static(Path.join(__dirname, Configs.express.static_dir + '/css')));
expressApp.use('/home', Express.static(Path.join(__dirname, Configs.express.static_dir)));
expressApp.use(History);
expressApp.use('/js', Express.static(Path.join(__dirname, Configs.express.static_dir + '/js')));
expressApp.use('/css', Express.static(Path.join(__dirname, Configs.express.static_dir + '/css')));
expressApp.use('/home', Express.static(Path.join(__dirname, Configs.express.static_dir)));

// Start the Express server
expressApp.listen(Configs.express.port, () => console.log(`Node server has been started on port: ${Configs.express.port}`.bgGreen.white));
