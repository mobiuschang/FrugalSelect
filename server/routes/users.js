const router = require('express').Router();
const db = require('../../db');
const User = db.model('users');
const Review = db.model('reviews');
module.exports = router;

router.get('/', function(req, res, next) {
  User.findAll({
    include:[Review]
  })
  .then(users => res.json(users))
  .catch(next);
})

router.get('/:userId', function(req, res, next) {
  User.findOne({
    where: { id:req.params.userId },
    include:[Review]
  })
  .then(user => {
    if(!user) {
      const err = Error('User not found');
      err.status = 404;
      throw err;
    }
    return res.status(201).json(user)
  })
  .catch(next);
})

router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(createdUser => res.send(createdUser))
  .catch(next);
});

router.delete('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
  .then(foundUser => foundUser.destroy())
  .then(() => res.sendStatus(204))
  .catch(next);
});