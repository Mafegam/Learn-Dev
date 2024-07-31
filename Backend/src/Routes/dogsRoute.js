import { Router } from "express";
import dogsController from "../Controllers/dogsController.js"

const dogsRouter = Router();

dogsRouter.get("/", dogsController.getImage)
dogsRouter.get("/", dogsController.getFact)

export default dogsRouter;