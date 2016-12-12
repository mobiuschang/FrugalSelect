'use strict';

const Sequelize = require('sequelize');
const db = require('./../index')

const Favorite = db.define('favorites', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Favorite;
