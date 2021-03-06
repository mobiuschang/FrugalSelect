'use strict';

const Sequelize = require('sequelize');
const db = require('./../index')

const Review = db.define('reviews', {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  comment: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Review;