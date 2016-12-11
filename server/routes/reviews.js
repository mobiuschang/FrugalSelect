const router = require('express').Router();
const db = require('../../db');
const Review = db.model('reviews');
module.exports = router;

router.get('/', function(req, res, next) {
  Review.findAll()
  .then(reviews => res.json(reviews))
  .catch(next);
})

router.get('/:reviewId', function(req, res, next) {
  Review.findById(req.params.reviewId)
  .then(review => {
    if(!review) {
      const err = Error('Review not found');
      err.status = 404;
      throw err;
    }
    return res.status(201).json(review)
  })
  .catch(next);
})