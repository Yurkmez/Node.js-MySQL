const Sequelize = require('sequelize');

const DB_NAME = 'node-todo';
const USER_NAME = 'root';
const PASSWORD = 'Ledzeppelin_7777';
const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
