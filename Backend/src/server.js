import express from "express";
import usersRouter from "./routes/usersRoute.js"
import morgan from "morgan";
import loginRouter from "./routes/loginRoute.js";

const servidor = express();


servidor.use(morgan("dev"))
servidor.use(express.json());
servidor.use("/usuarios", usersRouter);
servidor.use("/login", loginRouter);


// ESTO ES PARA CONECTARSE A LA RAIZ DE LA BDD Y HACER PRUEBAS
servidor.get(`/`,  (solicitud, respuesta)=>{
    respuesta.status(404).send("Root connected");
})

export default servidor;