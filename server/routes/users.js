const router = require('express').Router();
const db = require('../../db');
const User = db.model('users');
module.exports = router;

router.get('/', function(req, res, next) {
  User.findAll()
  .then(users => res.json(users))
  .catch(next);
})

router.get('/:userId', function(req, res, next) {
  User.findById(req.params.userId)
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