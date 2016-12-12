const router = require('express').Router();
const db = require('../../db');
const Review = db.model('reviews');
const User = db.model('users');
module.exports = router;

router.get('/', function(req, res, next) {
  Review.findAll({
    include: [User]
  })
  .then(reviews => res.json(reviews))
  .catch(next);
})

router.get('/:reviewId', function(req, res, next) {
  Review.findOne({
    where: { id: req.params.reviewId },
    include: [User]
  })
  .then(review => {
    if(!review) {
      const err = Error('Review not found');
      err.status = 404;
      throw err;
    }
    return res.status(201).json(review)
  })
  .catch(next);
});

router.post('/addReview', function (req, res, next) {
  Review.create(req.body)
  .then(review => res.status(201).send(review))
  .catch(next);
})