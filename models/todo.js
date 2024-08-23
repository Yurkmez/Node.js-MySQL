const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

// Первый параметр - название модели
// Далее мы создаем поля в таблице БД: id, done, ..
const todo = sequelize.define(
    'Todo',
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        done: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = todo;
