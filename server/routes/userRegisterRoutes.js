const express = require('express') ;
const userRegisterController = require('../controller/userRegisterController') ;

const router = express.Router() ;

const userRegisterMiddleware = userRegisterController.checkUser ; 
const userGetMiddleware = userRegisterController.isDataEmpty ;
router.route('/').get(userGetMiddleware , userRegisterController.getAllUsers).post(userRegisterMiddleware , userRegisterController.registerUser) 

module.exports = router ;
