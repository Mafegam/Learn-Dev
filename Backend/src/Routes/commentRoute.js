import { Router } from "express";

import commentController from "../Controllers/commentController.js";

const commentRouter = Router ();

commentRouter.post("/", commentController.createComment);
commentRouter.get('/', commentController.retrieveComments)
commentRouter.delete("/:id", commentController.removeComment)

export default commentRouter;