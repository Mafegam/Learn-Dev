import { Router } from "express";
import ControladorUsuarios from "../controllers/usersController.js"

const enrutadoUsuarios = Router ();


enrutadoUsuarios.post('/', ControladorUsuarios.crearUsuario)
enrutadoUsuarios.get('/', ControladorUsuarios.leerUsuarios)
enrutadoUsuarios.get('/:id', ControladorUsuarios.leerUsuario)
enrutadoUsuarios.put('/:id', ControladorUsuarios.actualizarUsuario)
enrutadoUsuarios.delete('/:id', ControladorUsuarios.eliminarUsuario)

export default enrutadoUsuarios;