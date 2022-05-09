//~ IMPORTATION MODULES
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Snippet extends Model {}

Snippet.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },

    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    link: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    date: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }

}, {
    sequelize,
    tableName: 'snippet'
});

module.exports = Snippet;