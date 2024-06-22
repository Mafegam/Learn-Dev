import { Router } from "express";
import ControladorUsuarios from "../Controllers/usersController.js"
import loginController from "../Controllers/loginController.js";

const enrutadoUsuarios = Router ();


enrutadoUsuarios.post('/', ControladorUsuarios.crearUsuario)
enrutadoUsuarios.get('/', ControladorUsuarios.leerUsuarios)
enrutadoUsuarios.get('/:id', ControladorUsuarios.leerUsuario)
enrutadoUsuarios.put('/:id', ControladorUsuarios.actualizarUsuario)
enrutadoUsuarios.delete('/:id', ControladorUsuarios.eliminarUsuario)

export default enrutadoUsuarios;