import { Schema, model } from "mongoose";

const userScheme = new Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        
    }
)

export default model("Usuario", userScheme)