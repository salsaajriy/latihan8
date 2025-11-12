const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

//router standar REST API
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById); //search by id
router.post('/', userController.createUser); //new data 
router.put('/:id', userController.updateUser); //update data by id
router.delete('/:id', userController.deleteUser); //delete data by id

module.exports = router;