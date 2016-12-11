'use strict';

const db = require('../db');
const api = module.exports = require('express').Router();

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/products', require('./routes/products'))
  .use('/users', require('./routes/users'))
  .use('/categories', require('./routes/categories'))
  .use('/reviews', require('./routes/reviews'))

api.use((err, req, res, next) => {
  res.status(500).send(err);
})

// If the route doesnt' match any, send 404
api.use((req, res) => res.status(404).end())