import express from "express";
import dotenv from "dotenv";
import contactController from "../controller/contactController.js";

dotenv.config();

const homeRouter = express.Router();

homeRouter.get("/", contactController.getContacts);

export default homeRouter;