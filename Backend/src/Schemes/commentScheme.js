import { Schema, model } from "mongoose";

const commentScheme = new Schema(
    {
        username: { type: String, required: true },
        comment: { type: String, required: true },
        email: { type: String, required: true}
    }
)

export default model("Comment", commentScheme)