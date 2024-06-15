import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_ATLAS_URI).then((dato)=>{
    console.log("Conectado a la base de datos");
}).catch((error)=>{
    console.log("No se conectó a la base de datos");
})