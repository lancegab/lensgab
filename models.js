const Sequelize = require('sequelize');
const database = require('./database');

const Image = database.define('images', {

	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},

	name: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false
	},

	description: {
		type: Sequelize.STRING,
		unique: false,
		allowNull: true
	},

  path: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false
	}

}, {
	timestamps: true
});

module.exports.Image = Image;
database.sync();
