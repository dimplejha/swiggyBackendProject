const express = require('express');
const router = express.Router();
const userModel = require('../model/userModel');
const userController = require('../controller/user');

router.post('/Postuser', userController.postData);
router.post('/Loginuser', userController.loginUser);
router.get('/Getuser', userController.getData);
router.put('/Updateuser/:id', userController.updateData);
router.delete('/Deleteuser/:id', userController.deleteData);
router.get('/Getperticularuser', userController.getPerticularData);
module.exports = router;
