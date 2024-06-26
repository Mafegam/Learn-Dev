import userContentScheme from '../Schemes/userContentScheme.js';

const contentController = {

    updateUser: async (solicitud, respuesta) => {
        console.log("Solicitud body", solicitud.body);

        try {
            const usuarioActualizado = await userContentScheme.findByIdAndUpdate(
                solicitud.params.id, solicitud.body
            );
            if (usuarioActualizado._id) {
                console.log("Good!");
                respuesta.json({
                    mensaje: "Datos actualizados!:",
                    datos: usuarioActualizado._id,
                });
            }
        } catch {
            console.log((solicitud.body));
            respuesta.json({ error: true, mensaje: "There was an error!" });
        }
    },
}



export default contentController;