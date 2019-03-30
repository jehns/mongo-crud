// api/users
const router = require('express').Router();

// matches GET requests to /api/puppies/
router.get('/', function (req, res, next) {

  console.log('user route');
});


module.exports = router;
