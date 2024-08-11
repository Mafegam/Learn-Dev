import userScheme from '../schemes/userScheme.js';
import bcrypt from 'bcryptjs';

const ControladorUsuarios = {
    crearUsuario: async (solicitud, respuesta) => {
        try {
            const { username, email, password } = solicitud.body;
            const hashPassword = await bcrypt.hash(password, 10);
            const newUser = new userScheme({
                username: username,
                email: email,
                password: hashPassword,
            });
            
            const userCreated = await newUser.save();
            if (userCreated._id) {
                respuesta.json({
                    resultado: "Exitoso",
                    mensaje: "Usuario creado con éxito",
                    datos: userCreated._id
                })
                console.log(userCreated);
            } else{
            }
        } catch (error) {
            console.log("Error: ", error);
            respuesta.json({ error: true, mensaje: "Ocurrió un error al crear usuario" });
        }
    },

    leerUsuario: async (solicitud, respuesta) => {
        try {
            const usuarioEncontrado = await userScheme.findById(solicitud.params.id)
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
            const todosLosUsuarios = await userScheme.find();
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

    updatePassword: async (solicitud, respuesta) => {
        try {
            const passwordUpdated = await userScheme.findByIdAndUpdate(
                solicitud.params.id, solicitud.body
            );
            if (passwordUpdated._id) {
                respuesta.json({
                    resultado: "Successful",
                    mensaje: "Datos actualizados en CRUD controller, bien!:",
                    datos: passwordUpdated._id,
                });
            } else {
                console.log("Boohoo");
            }
        } catch {
            console.log((solicitud.body));
            respuesta.json({ error: true, mensaje: "Error!" });
        }
    },

    eliminarUsuario: async (solicitud, respuesta) => {
        try {
            const usuarioEliminado = await userScheme.findByIdAndDelete(solicitud.params.id);
            if (usuarioEliminado._id) {
                respuesta.json({
                    resultado: "Exitoso",
                    mensaje: "Usuario eliminado con éxito!",
                    datos: null
                });
            }
        } catch (error) {
            console.log("Error: ", error);
            respuesta.json({ error: true, mensaje: "Error deleting" });
        }
    },
}

export default ControladorUsuarios;