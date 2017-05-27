const Sequelize = require('sequelize');

const connectionUrl = 'postgres://lensgab:lensgab@localhost:5432/lensgabdb';
const database = new Sequelize(connectionUrl);

module.exports = database;
