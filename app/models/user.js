//~ IMPORTATION MODULES
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    firstname: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    lastname: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    role: {
        type: DataTypes.TEXT,
        allowNull: true
    }

}, {
    sequelize,
    tableName: 'user'
});

module.exports = User;