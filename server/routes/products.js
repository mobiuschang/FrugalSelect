const router = require('express').Router();
const db = require('../../db');
const Product = db.model('products');
const Alternative = db.model('alternatives');
const Review = db.model('reviews');
const Category = db.model('categories');
module.exports = router;

router.get('/', (req, res, next) => {
  Product.findAll({
    include: [Alternative, Review, Category]
  })
  .then(products => res.json(products))
  .catch(next);
})

router.get('/:productId', (req, res, next) => {
  Product.findOne({
    where: {id: req.params.productId},
    include: [Alternative, Review, Category]
  })
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

router.post('/addProduct', (req, res, next) => {
  Product.create({
    rating: "1",
    comment: 'great',
    productId: 1,
    userid: 1
  })
  .then(product => console.log('haha'))
  .catch(next);
})

router.delete('/:productId', (req, res, next) => {
  Product.destroy({
    where: {id: req.params.productid}
  })
  .then(productDeleted => {
    res.status(204)
  })
  .catch(next)
});