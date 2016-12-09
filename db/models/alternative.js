'use strict';

const Sequelize = require('sequelize');
const db = require('./../index')

const Alternative = db.define('alternatives', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  description: Sequelize.TEXT,
  url: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
});

module.exports = Alternative;