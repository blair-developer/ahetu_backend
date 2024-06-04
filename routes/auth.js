const router = require('express').Router();
const AuthController = require('../controllers/authController');

router.post('/register', AuthController.createUser);

router.post('/login', AuthController.loginUser);


module.exports = router;