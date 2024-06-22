import multer from "multer";
import userContentScheme from "../Schemes/userContentScheme.js"

const userContentController = {
    addContent: async (solicitud, respuesta) => {
        try {
            const { title, content, added } = solicitud.body;
            const newContent = new userContentScheme({
                title: title,
                content: content,
                added: added
            });
            const contentAdded = await newContent.save();
            if (contentAdded._id) {
                respuesta.json({
                    resultado: "Exitoso",
                    mensaje: "Contenido añadido con éxito",
                    datos: contentAdded._id
                })
                console.log(contentAdded);
            }
        } catch (error) {
            console.log("Error: ", error);
            respuesta.json({ error: true, mensaje: "Ocurrió un error al añadir el contenido" });
        }
    },

    viewContent: async (solicitud, respuesta) => {
        try {
            const contentFound = await userContentScheme.findById(solicitud.params.id)
            if (contentFound._id) {
                respuesta.json({
                    resultado: "Exitoso",
                    mensaje: "Contenido encontrado con éxito!",
                    datos: contentFound
                });
            }
        } catch (error) {
            respuesta.json({
                error: true,
                mensaje: "Ocurrió un error al encontrar el conteido",
                datos: error
            });
        }
    },

    viewAllContent: async (solicitud, respuesta) => {
        try {
            const allContent = await userContentScheme.find();
            respuesta.json({
                resultado: "Exitoso",
                mensaje: "Todo el contenido leido con éxito!",
                datos: allContent
            });
            console.log("Cargado en postman");
        } catch (error) {
            console.log("Error: ", error);
                respuesta.json({ error: true, mensaje: "Ocurrió un error al leer el contenido" });
        }
    },

    deleteContent: async (solicitud, respuesta) => {
        try {
            const deletedContent = await userContentScheme.findByIdAndDelete(solicitud.params.id);
            if (usuarioEliminado._id) {
                respuesta.json({
                    resultado: "Exitoso",
                    mensaje: "Contenido eliminado con éxito!",
                    datos: null
                });
            }
        } catch (error) {
            console.log("Error: ", error);
            respuesta.json({ error: true, mensaje: "Ocurrió un error al eliminar el contenido" });
        }
    },

}

export default userContentController;