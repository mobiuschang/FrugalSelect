const router = require('express').Router();
const db = require('../../db');
const Product = db.model('products');
module.exports = router;

router.get('/', function(req, res, next) {
  Product.findAll()
  .then(products => res.json(products))
  .catch(next);
})