import { Router } from "express";
import crudController from "../Controllers/crudController.js"

const crudRouter = Router ();


crudRouter.post('/', crudController.crearUsuario)
crudRouter.get('/', crudController.leerUsuarios)
crudRouter.get('/:id', crudController.leerUsuario)
crudRouter.put('/:id', crudController.updatePassword)
crudRouter.delete('/:id', crudController.eliminarUsuario)

export default crudRouter;