const mongoose = require("mongoose");
const Schema = mongoose.Schema

const description = new Schema({
    description: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date, 
        default: Date.now
    }
})

const Description = mongoose.model("Description", description);
module.exports = Description