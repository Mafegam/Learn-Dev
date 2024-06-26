import { Router } from "express";
import loginController from "../Controllers/loginController.js";

const loginRouter = Router();

loginRouter.post('/', loginController.login);
loginRouter.get('/:token', loginController.validateToken);
loginRouter.put('/:id', loginController.updateUser);

export default loginRouter;