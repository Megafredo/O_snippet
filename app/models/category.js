//~ IMPORTATION MODULES
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Category extends Model {}

Category.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },

    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    image: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    created_at:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue : DataTypes.NOW,
    },

    upgrated_at : {
        type: DataTypes.DATE,
        allowNull: true,
    }


}, {
    sequelize,
    tableName: 'category'
});

module.exports = Category;