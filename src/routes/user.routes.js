const router = require('express').Router();
const { signup, login } = require('../controllers/user.controller');

// temporary test endpoints 
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
