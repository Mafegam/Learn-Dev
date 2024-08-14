import { watch } from "fs";
import watchLaterScheme from "../schemes/watchLaterScheme.js"

const watchLaterController = {
    addToList: async (solicitud, respuesta) => {
        try {
            const { link, title, status } = solicitud.body
            const newTutorial = new watchLaterScheme({
                link: link,
                title: title,
                status: status
            })

            const addedTutorial = await newTutorial.save();

            if (addedTutorial) {
                respuesta.json({
                    result: "Successful",
                    message: "Tutorial added",
                    data: addedTutorial._id
                });
                console.log("Tutorial added");
            }
        } catch (error) {
            console.log("Error",);
            respuesta.json({
                result: "Unsuccessful",
                message: "Error adding tutorial",
                data: null
            });
        }
    },

    retrieveList: async (solicitud, respuesta) => {
        try {
            const completeList = await watchLaterScheme.find();
            respuesta.json({
                resultado: "Successful",
                mensaje: "These are the tutorials",
                datos: completeList
            });
        } catch (error) {
            console.log("Error: ", error);
            respuesta.json({ error: true, mensaje: "Error retrieving tutorials" });
        }
    },

    removeTutorial: async (solicitud, respuesta) => {
        try {
            const tutorialRemoved = await watchLaterScheme.findByIdAndDelete(solicitud.params.id)
            if (tutorialRemoved._id) {
                respuesta.json({
                    resultado: "Successful",
                    mensaje: "Tutorial removed",
                    datos: null
                });
            }
        } catch (error) {
            console.log("Error trying to remove tutorial", error);
            respuesta.json({
                resultado: "Error",
                mensaje: "Tutorial couldn't be removed",
                datos: null
            });
        }
    },

    removeAllTutorials: async (solicitud, respuesta) => {
        try {
            const allTutorialsRemoved = await watchLaterScheme.deleteMany(solicitud.allTutorials)
            if (allTutorialsRemoved) {
                respuesta.json({
                    resultado: "Successful",
                    mensaje: "All tutorials removed",
                    datos: null
                });
            } else {
                console.log("Error: ", error);
                respuesta.json({
                    error: true,
                    mensaje: "Error deleting all"
                });
            }
        } catch (error) {
            respuesta.json({
                error: true,
                mensaje: "Error deleting all tuts"
            });
        }
    },

    alreadyExists: async (solicitud, respuesta) => {
        const { link } = solicitud.query; 
        try {
            const existingTutorial = await watchLaterScheme.findOne({ link: link })
            if (existingTutorial) {
                console.log("Already added");
                respuesta.json({ 
                    resultado: "Successful",
                    mensaje: "Already added" })
            } else {
                respuesta.json({
                    mensaje: "No added"
                })
            }
        } catch (error) {
            respuesta.json({
                error: true,
                mensaje: "Error"
            });
        }
    }

}

export default watchLaterController;