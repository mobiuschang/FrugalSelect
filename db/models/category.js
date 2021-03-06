'use strict';

const Sequelize = require('sequelize');
const db = require('./../index')

const Category = db.define('categories', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Category;
