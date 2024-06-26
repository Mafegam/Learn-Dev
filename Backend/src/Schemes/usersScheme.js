import { Schema, model } from "mongoose";

const esquemaUsuario = new Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        watchLater: { trype: String },
    }
)

export default model("Usuario", esquemaUsuario)