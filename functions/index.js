const app = require('./server.js');

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

exports.api = onRequest(app);
