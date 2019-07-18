import express from "express";
import customerController from "./userController";

const router = express.Router();
const controller = new customerController();

router.post('/', controller.addUser);
router.get('/', controller.getUsers);
router.delete('/', controller.deleteUserById);
router.put('/', controller.updateUserById);


module.exports = router;