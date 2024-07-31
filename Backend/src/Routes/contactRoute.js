import { Router } from "express";

import contactController from "../Controllers/contactController.js";

const contactRouter = Router ();

contactRouter.post("/", contactController.createMessage);

export default contactRouter;