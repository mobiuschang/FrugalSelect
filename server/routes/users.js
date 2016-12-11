const router = require('express').Router();
const db = require('../../db');
const User = db.model('users');
module.exports = router;

router.get('/', function(req, res, next) {
  User.findAll()
  .then(users => res.json(users))
  .catch(next);
})