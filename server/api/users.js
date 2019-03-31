// api/users
const router = require('express').Router();

// matches GET requests to /api/users/
router.get('/', function (req, res, next) {
  res.json({name: 'stuart', age: 10});
});


module.exports = router;
