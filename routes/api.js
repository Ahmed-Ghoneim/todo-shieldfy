const api = require('express').Router();

// Load lists routes.
api.use('/items', require('./items'));

module.exports = api;
