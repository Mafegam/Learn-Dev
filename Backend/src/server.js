import express from "express";
import morgan from "morgan";
import cors from "cors";

import usersRouter from "./routes/usersRoute.js"
import loginRouter from "./routes/loginRoute.js";
import contentManagerRoute from "./routes/contentManagerRoute.js";

const servidor = express();

servidor.use(cors()) ,
servidor.use(morgan("dev"))
servidor.use(express.json());
// SIGNUP
servidor.use("/users", usersRouter);
// LOGIN
servidor.use("/login", loginRouter);
servidor.use("/contentManager", contentManagerRoute);


// ESTO ES PARA CONECTARSE A LA RAIZ DE LA BDD Y HACER PRUEBAS
servidor.get(`/`,  (solicitud, respuesta)=>{
    respuesta.status(404).send("Root connected");
})

export default servidor;