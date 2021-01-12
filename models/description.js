const mongoose = require("mongoose");
const Schema = mongoose.Schema

const description = new Schema({
    description: {
        type: String,
        required: true,
    },
    timestamp: {
        type: String, 
        default: new Date.now
    }
})

const Description = mongoose.model("Description", description);
module.exports = Description;