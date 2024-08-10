import { Router } from "express";
import dogsController from "../controllers/dogsController.js"

const dogsRouter = Router();

dogsRouter.get("/", dogsController.getImage)
dogsRouter.get("/", dogsController.getFact)

export default dogsRouter;