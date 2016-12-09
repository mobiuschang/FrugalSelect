'use strict';

const Sequelize = require('sequelize');
const db = require('./../index')

const User = db.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  password: Sequelize.STRING
});

module.exports = User;