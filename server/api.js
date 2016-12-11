'use strict';

const db = require('../db');
const api = require('express').Router();

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('products', require('./routes/products'))

api.use((err, req, res, next) => {
  res.status(500).send(err);
})

api.use((req, res) => res.status(404).end());