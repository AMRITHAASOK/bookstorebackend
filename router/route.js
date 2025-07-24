// import express
const express = require('express')
const usercontroller = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const bookController = require('../controllers/bookController')
const multerMiddleware = require('../middlewares/multerMiddleware')
//create an instance 
const route = new express.Router()

//API CALL FOR REGISTER

route.post('/api/register',usercontroller.register)
route.post('/api/login',usercontroller.login)
route.post('/api/google-login',usercontroller.googleAuth)
route.post('/api/addBook',jwtMiddleware,multerMiddleware.array('UploadedImages',3),bookController.addBook)

//export the route
module.exports = route