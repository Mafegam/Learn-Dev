const dogsController = {
    getImage: async (solicitud, respuesta) => {
        try {
            const respuesta = await fetch("https://dog.ceo/api/breeds/image/random")
            const data = await respuesta.json();
            console.log("Success, there are dogs!", data.message);
        }
        catch (error) {
            console.log("Error calling API", error);
            respuesta.json({
                resultado: "Error!",
                mensaje: "Couldn't fetch",
                error: error
            })
        }
    },

    getFact: async (solicitud, respuesta) => {
        try {
            const respuesta = await fetch("https://dogapi.dog/api/v2/facts")
            const data = await respuesta.json();
            console.log("Success, there are facts!", data.attributes.body);
        } catch (error) {
            console.log("Error calling facts API");
            respuesta.json({
                resultado: "Error!",
                mensaje: "Couldn't fetch facts",
                error: error
            })
        }
    }
}

export default dogsController;