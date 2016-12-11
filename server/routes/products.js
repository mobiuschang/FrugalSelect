const router = require('express').Router();
const db = require('../../db');
const Product = db.model('products');
module.exports = router;

router.get('/', function(req, res, next) {
  Product.findAll()
  .then(products => res.json(products))
  .catch(next);
})

router.get('/:productId', function(req, res, next) {
  Product.findById(req.params.productId)
  .then(product => {
    if(!product) {
      const err = Error('Product not found');
      err.status = 404;
      throw err;
    }
    return res.status(201).json(product)
  })
  .catch(next);
})