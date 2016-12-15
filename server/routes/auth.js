const router = require('express').Router();
const db = require('../../db');
const User = db('users');
module.exports = router;

router.post('/signup', (req, res, next) => {
  User.create(req.body)
  .then(user => res.json(user))
  .catch(err => console.log('Unable to create user'))
})