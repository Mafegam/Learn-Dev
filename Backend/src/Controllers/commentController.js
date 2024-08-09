import commentScheme from "../schemes/commentScheme.js";

const commentController = {
    createComment: async (solicitud, respuesta) => {
        try {
            const { comment, username, email } = solicitud.body
            const newComment = new commentScheme({
                comment: comment,
                username: username,
                email: email
            })

            const commentCreated = await newComment.save();
            if (commentCreated._id) {
                respuesta.json({
                    result: "Successful",
                    message: "Comment created",
                    data: commentCreated._id
                });
                console.log("Comment sent");
            }
        } catch (error) {
            console.log("Error",);
            respuesta.json({
                result: "Unsuccessful",
                message: "Error posting comment",
                data: null
            });
        }
    },

    retrieveComments: async (solicitud, respuesta) => {
        try {
            const commentsList = await commentScheme.find()
            respuesta.json({
                resultado: "Successful",
                mensaje: "These are the comments",
                datos: commentsList
            });
        } catch (error) {
            console.log("Error: ", error);
            respuesta.json({ error: true, mensaje: "Error retrieving comments" });
        }
    },

    removeComment: async (solicitud, respuesta) => {
        try {
            const commentRemoved = await commentScheme.findByIdAndDelete(solicitud.params.id)
            if (commentRemoved._id) {
                respuesta.json({
                    resultado: "Successful",
                    mensaje: "Comment removed",
                    datos: null
                });
            }
        } catch (error) {
            console.log("Error trying to remove tutorial", error);
            respuesta.json({
                resultado: "Error",
                mensaje: "Comment couldn't be removed",
                datos: null
            });
        }
    }
}


export default commentController;