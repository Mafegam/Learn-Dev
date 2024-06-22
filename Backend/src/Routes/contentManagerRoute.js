import { Router } from "express";
import userContentController from "../Controllers/userContentController.js";

const userContentRouter = Router();

userContentRouter.post('/', userContentController.addContent)
userContentRouter.get('/', userContentController.viewAllContent)
userContentRouter.get('/:id', userContentController.viewContent)
userContentRouter.delete('/:id', userContentController.deleteContent)

export default userContentRouter;