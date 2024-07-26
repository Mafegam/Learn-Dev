import { Schema, model } from "mongoose";

const esquemaPassNuevo = new Schema(
    {
        currentPassword: { type: String, required: true },
        password: { type: String, required: true },
        confirmPassword: { type: String, required: true }
    }
)

export default model("PasswordChange", esquemaPassNuevo)