import usersScheme from "../schemes/usersScheme.js";
import bcryptjs from 'bcryptjs';
import { generateToken } from "../tools/functions.js";

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
                userFound.password)

            if (validatedPassword) {
                generateToken()

                respuesta.json({
                    resultado: "Successful",
                    mensaje: "Logged in",
                    data: userFound._id,
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
}

export default loginController;