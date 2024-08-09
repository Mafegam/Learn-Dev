import { Schema, model } from "mongoose";

const watchLaterScheme = new Schema(
    {
        link: { type: String, required: true },
        title: { type: String, required: true },
        status: { type: Boolean, required: true },
    }
)

export default model("Watch Later", watchLaterScheme)