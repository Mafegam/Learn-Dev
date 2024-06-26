import { Schema, model } from "mongoose";

const userContentScheme = new Schema(
    {
        watchLater: [{ type: String }]

    })

export default model("userContent", userContentScheme)