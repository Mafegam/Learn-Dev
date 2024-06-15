// AQUI SE IMPORTA EL MODULO PARA PODER LAS VARIABLES
// DE ENTORNO
import "dotenv/config";

// AQUI SE IMPORTA LA CONEXION A LA BASE DE DATOS
import "./databaseConnection.js";

// AQUI SE IMPORTA EL SERVIDOR DE EXPRESS
// DESDE servidor.js
import servidor from "./server.js";

// AQUI SE ENCIENDE EL SERVIDOR Y SE PONE
// A ESCUCHAR PETICIONES POR EL PUERTO 3000
servidor.listen(3000, ()=>{
    console.log("Server runs inport 3000!");
});