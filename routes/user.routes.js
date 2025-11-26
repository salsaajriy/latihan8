import express from 'express';
import * as userController from '../controllers/user.controller.js';
import { authBearer } from '../middlewares/auth.middleware.js';

const router = express.Router();

//router standar REST API
router.get("/", authBearer, userController.getAllUsers);
router.get("/:id", authBearer, userController.getUserById); //search by id
router.post("/", authBearer, userController.createUser); //new data 
router.put("/:id", authBearer, userController.updateUser); //update data by id
router.delete("/:id", authBearer, userController.deleteUser); //delete data by id

export default router;