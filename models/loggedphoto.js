const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loggedPhoto = new Schema({
    title: {
        type: String, 
        required: true,
    },
    location: {
        type: String, 
        required: true,
    }, 
    description: {
        type: String,
        required: true,
    },
    URL: {
        type: String,
        required: true,
    }
})

const LoggedPhoto = mongoose.model("LoggedPhoto", loggedPhoto);
module.exports = LoggedPhoto