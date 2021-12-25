import express from "express";
import {getNotifs, getNotifID, saveNotif, updateNotif, deleteNotif} from"../controllers/studentController.js";
const router = express.Router();
//get all
router.get('/', getNotifs);
//create data
router.post('/', saveNotif);
//get by ID
router.get('/:id' , getNotifID);
//update
router.patch('/:id', updateNotif);
//delete
router.delete('/:id', deleteNotif);
export default router;