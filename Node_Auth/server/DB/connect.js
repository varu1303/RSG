const mongoose = require('mongoose');
const db = require('./../config/dbURI');

mongoose.connect(db, { useNewUrlParser: true });

module.exports = mongoose.connection;
