import express from "express";
import morgan from "morgan";
import cors from "cors";

import crudRouter from "./Routes/crudRoute.js" ;
import loginRouter from "./Routes/loginRoute.js";
import contactRouter from "./Routes/contactRoute.js"
import commentRouter from "./Routes/commentRoute.js"
import watchLaterRouter from "./Routes/watchLaterRoute.js";

import dogsRouter from "./Routes/dogsRoute.js";

const servidor = express();

servidor.use(cors()) ,
servidor.use(morgan("dev"))
servidor.use(express.json());

// SIGNUP
servidor.use("/users", crudRouter);

// COMMENT
servidor.use("/comment", commentRouter)

// WATCH LATER
servidor.use("/watchLater", watchLaterRouter)

// LOGIN
servidor.use("/login", loginRouter);

// CONTACT US
servidor.use("/contact", contactRouter);

// DOGS API
servidor.use("/dogsImages", dogsRouter)

// DOGS FACTS API
servidor.use("/dogsFacts", dogsRouter)

// RUTA RAIZ
servidor.get(`/`,  (solicitud, respuesta)=>{
    respuesta.status(404).send("Root connected");
})


export default servidor;