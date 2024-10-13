const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user.controller');
const { verifyTokenMiddleware } = require('../middlewares/jwt.middleware');

router.get('/', verifyTokenMiddleware , usersController.getUsers);

module.exports = router;