const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pastries = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    price: {
        type: String,
        required: true
    }, 
    imageURL: {
        type: String,
        required: false
    }
})

const Pastries = mongoose.model("Pastries", pastries);
module.exports = Pastries;