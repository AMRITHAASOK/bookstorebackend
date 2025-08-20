// import express
const express = require('express')
const usercontroller = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')

const bookController = require('../controllers/bookController')
const jobController = require('../controllers/jobController')
const multerMiddleware = require('../middlewares/multerMiddleware')
//create an instance 
const route = new express.Router()

//API CALL FOR REGISTER

route.post('/api/register',usercontroller.register)
route.post('/api/login',usercontroller.login)
route.post('/api/google-login',usercontroller.googleAuth)
route.post('/api/addBook',jwtMiddleware,multerMiddleware.array('UploadedImages',3),bookController.addBook)


route.get('/api/homeBooks',bookController.getHomeBooks)

route.get('/api/allBooks',jwtMiddleware,bookController.getAllBooks)

route.get('/api/getABook/:id',jwtMiddleware,bookController.getABook)

route.get('/api/admin-allBooks',jwtMiddleware,bookController.getAllBookAdminController)


route.put('/api/admin-approvedBook',jwtMiddleware,bookController.approveBooksAdminController)

route.get('/api/admin-allUsers',jwtMiddleware,usercontroller.getAllUsersAdminController)

route.post('/api/admin-addJobs',jwtMiddleware,jobController.addJobs)

route.get('/api/admin-allJobs',jwtMiddleware,jobController.getAllJobs)

route.delete('/api/admin-deleteJobs/:id',jobController.deleteAJobs)


route.put('/api/updateAdmin',jwtMiddleware,multerMiddleware.single('profile'),usercontroller.updateAdminDetails)

route.get('/api/admin-Details',jwtMiddleware,usercontroller.getAdminDetails)


route.put('/api/make-payment',jwtMiddleware,bookController.makepayment)

//export the route
module.exports = route