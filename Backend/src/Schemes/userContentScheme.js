import { Schema, model } from "mongoose";

const userContentScheme = new Schema(
    {
        title: {type: String, required:true},
        content: {type: String, required:true}, 
        // icon: 
        added: {type: Boolean}
    }
)

export default model("userContent", userContentScheme)