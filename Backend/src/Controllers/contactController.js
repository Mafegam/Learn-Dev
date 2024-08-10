import contactScheme from "../schemes/contactScheme.js";

const contactController = {
	createMessage: async (solicitud, respuesta) => {
		try {
			const { name, email, message } = solicitud.body
			const newMessage = new contactScheme({
				name: name,
				email: email,
				message: message
			})

			const messageCreated = await newMessage.save();
			if (messageCreated._id) {
				respuesta.json({
					result: "Successful",
					message: "Message created",
					data: messageCreated._id
				});
				console.log("Message sent");
			}
		} catch (error) {
			console.log("Error",);
			respuesta.json({
				result: "Unsuccessful",
				message: "Error sending message",
				data: null
			});
		}
	}
}


export default contactController;