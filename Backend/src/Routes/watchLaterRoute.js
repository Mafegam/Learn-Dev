import { Router } from "express";

import watchLaterController from "../controllers/watchLaterController.js";

const watchLaterRouter = Router ();

watchLaterRouter.post("/", watchLaterController.addToList);


watchLaterRouter.get("/", watchLaterController.retrieveList);
watchLaterRouter.delete("/:id", watchLaterController.removeTutorial);
watchLaterRouter.delete("/", watchLaterController.removeAllTutorials)
watchLaterRouter.get("/exists", watchLaterController.alreadyExists);

export default watchLaterRouter;