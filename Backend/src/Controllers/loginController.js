import bcryptjs from 'bcryptjs';
import { generateToken, verifyToken } from "../Tools/functions.js";
import usersScheme from "../schemes/usersScheme.js";

const loginController = {
    login: async (solicitud, respuesta) => {
        try {
            const { email, password } = solicitud.body;
            // ESTE METODO ES PARA VERIFICAR QUE EL EMAIL EXISTA EN LA BASE DE DATOS
            const userFound = await usersScheme.findOne({
                email: email,
            });
            // ESTE METODO ES PARA COMPARAR LA CONTRASENA QUE INGRESAR EL USUARIO CON LA QUE 
            // ESTA GUARDADA EN LA BASE DE DATOS
            const validatedPassword = await bcryptjs.compare(
                password,
                userFound.password
            );

            // ESTE CONDICIONAL ES PARA GENERAR EL TOKEN EN CASO DE QUE LA CONTRASENIA SEA CORRECTA
            if (validatedPassword) {
                const token = await generateToken({
                    id: userFound._id,
                    username: userFound.username,
                });
                respuesta.json({
                    resultado: "Successful",
                    mensaje: "Logged in",
                    data: token,
                });
            } else {
                respuesta.json({
                    resultado: "Unsuccessful",
                    mensaje: "Wrong credentials",
                    data: null,
                });
            }

        } catch (error) {
            respuesta.json({
                resultado: "Unsuccessful",
                mensaje: "User not found",
                data: error,
            });
        }
    },
    validateToken: async (solicitud, respuesta) => {
        try {
            const token = solicitud.params.token;
            const decoded = await verifyToken(token);

            if (decoded.id) {
                respuesta.json({
                    resultado: "Successful",
                    mensaje: "Valid token",
                    data: decoded,
                });
            } else {
                respuesta.json({
                    resultado: "Unsuccessful",
                    mensaje: "Invalid token",
                    data: null,
                });
            }
        } catch (error) {
            respuesta.json({
                resultado: "Unsuccessful",
                mensaje: "Token couldn't be validated",
                data: error,
            });
        }
    },
}

export default loginController;