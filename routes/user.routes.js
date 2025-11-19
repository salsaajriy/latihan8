import express from 'express';
import * as userController from '../controllers/user.controller.js';

const router = express.Router();

//router standar REST API
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById); //search by id
router.post('/', userController.createUser); //new data 
router.put('/:id', userController.updateUser); //update data by id
router.delete('/:id', userController.deleteUser); //delete data by id

export default router;