import { Router } from "express";

import contactController from "../controllers/contactController.js";

const contactRouter = Router ();

contactRouter.post("/", contactController.createMessage);

export default contactRouter;