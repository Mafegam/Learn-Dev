import usersScheme from "../schemes/usersScheme.js";
import ModeloUsuario from "../schemes/usersScheme.js";
import bcrypt from 'bcryptjs';

const ControladorUsuarios = {
    crearUsuario: async (solicitud, respuesta) => {
        try {
            const { username, email, password } = solicitud.body;
            const hashPassword = await bcrypt.hash(password, 10);
            const newUser = new usersScheme({
                username: username,
                email: email,
                password: hashPassword
            });
            const userCreated = await newUser.save();
            if (userCreated._id) {
                respuesta.json({
                    resultado: "Exitoso",
                    mensaje: "Usuario creado con éxito",
                    datos: userCreated._id
                })
                console.log(userCreated);
            }
        } catch (error) {
            console.log("Error: ", error);
            respuesta.json({ error: true, mensaje: "Ocurrió un error al crear usuario" });
        }
    },

    leerUsuario: async (solicitud, respuesta) => {
        try {
            const usuarioEncontrado = await ModeloUsuario.findById(solicitud.params.id)
            if (usuarioEncontrado._id) {
                respuesta.json({
                    resultado: "Exitoso",
                    mensaje: "Usuario leido con éxito!",
                    datos: usuarioEncontrado
                });
            }
        } catch (error) {
            respuesta.json({
                error: true,
                mensaje: "Ocurrió un error al leer usuario",
                datos: error
            });
        }
    },

    leerUsuarios: async (solicitud, respuesta) => {
        try {
            const todosLosUsuarios = await ModeloUsuario.find();
            respuesta.json({
                resultado: "Exitoso",
                mensaje: "Todos los usuarios leido con éxito!",
                datos: todosLosUsuarios
            });
            console.log("Cargado en postman");
        } catch (error) {
            console.log("Error: ", error);
            respuesta.json({ error: true, mensaje: "Ocurrió un error al leer los usuarioS" });
        }
    },

    actualizarUsuario: async (solicitud, respuesta) => {
        try {
            const usuarioActualizado = await ModeloUsuario.findByIdAndUpdate(
                solicitud.params.id, solicitud.body
            );
            if (usuarioActualizado._id) {
                respuesta.json({
                    mensaje: "Datos actualizados:",
                    datos: usuarioActualizado._id,
                });
            }
        } catch {
            console.log((solicitud.body));
            respuesta.json({ error: true, mensaje: "Ocurrió un error al actualizar el usuario" });
        }
    },

    eliminarUsuario: async (solicitud, respuesta) => {
        try {
            const usuarioEliminado = await ModeloUsuario.findByIdAndDelete(solicitud.params.id);
            if (usuarioEliminado._id) {
                respuesta.json({
                    resultado: "Exitoso",
                    mensaje: "Usuario eliminado con éxito!",
                    datos: null
                });
            }
        } catch (error) {
            console.log("Error: ", error);
            respuesta.json({ error: true, mensaje: "Ocurrió un error al eliminar el usuario" });
        }
    },
}

export default ControladorUsuarios;