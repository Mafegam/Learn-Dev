import express from "express";
import morgan from "morgan";
import cors from "cors";

import crudRouter from "./Routes/crudRoute.js" ;
import loginRouter from "./Routes/loginRoute.js";

const servidor = express();

servidor.use(cors()) ,
servidor.use(morgan("dev"))
servidor.use(express.json());

// SIGNUP Y WATCH LATER
servidor.use("/users", crudRouter);
// LOGIN
servidor.use("/login", loginRouter);


// ESTO ES PARA CONECTARSE A LA RAIZ DE LA BDD Y HACER PRUEBAS
servidor.get(`/`,  (solicitud, respuesta)=>{
    respuesta.status(404).send("Root connected");
})

export default servidor;