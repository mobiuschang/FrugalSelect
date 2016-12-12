const router = require('express').Router();
const db = require('../../db');
const Category = db.model('categories');
const Product = db.model('products');
module.exports = router;

router.get('/', function(req, res, next) {
  Category.findAll({
    include: [Product]
  })
  .then(categories => res.json(categories))
  .catch(next);
})

router.get('/:categoryId', function(req, res, next) {
  Category.findOne({
    where: {id: req.params.categoryId},
    include: [Product]
    })
  .then(category => {
    if(!category) {
      const err = Error('Category not found');
      err.status = 404;
      throw err;
    }
    return res.status(201).json(category)
  })
  .catch(next);
})