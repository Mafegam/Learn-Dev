import { Router } from "express";
import crudController from "../controllers/crudController.js"

const crudRouter = Router ();


crudRouter.post('/', crudController.crearUsuario)
crudRouter.get('/', crudController.leerUsuarios)
crudRouter.get('/:id', crudController.leerUsuario)
crudRouter.put('/:id', crudController.updatePassword)
crudRouter.delete('/:id', crudController.eliminarUsuario)
crudRouter.get('/exists', crudController.chequearExistente)

export default crudRouter;