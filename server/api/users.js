const router = require('express').Router();
const User = require('../models/User');

// matches GET requests to /api/users/
router.get('/', async (req, res, next) => {
  try {
    User.findOne({})
  } catch(err) { console.log(err) }
});

// add user to db
router.post('/', async (req, res, next) => {
  try {
    const userExists = await User.findOne({email: req.body.email})
    if (userExists) {
      res.sendStatus(400);
    } else {
      const newUser = await new User({name: req.body.name, email: req.body.email}).save();
      res.json(newUser)
    }
  } catch(err) { console.log(err) }
});


module.exports = router;
