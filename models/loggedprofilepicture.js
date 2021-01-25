const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loggedProfilePicture = new Schema({
    title: {
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

const LoggedProfilePicture = mongoose.model("LoggedProfilePicture", loggedProfilePicture);
module.exports = LoggedProfilePicture