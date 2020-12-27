const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profilepic = new Schema ({
 
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
  
});

const ProfilePic = mongoose.model("ProfilePic", profilepic);
module.exports = ProfilePic;