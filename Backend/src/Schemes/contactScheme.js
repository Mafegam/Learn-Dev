import { Schema, model } from "mongoose";

const contactScheme = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        message: { type: String, required: true },
        image: { type: String, required: false }
    }
)

export default model("Contact", contactScheme)