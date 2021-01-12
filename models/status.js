const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statusUpdate = new Schema ({
    status: {
        type: String, 
        required: true
    },
    timestamp: {
        type: Date, 
        default: Date.now
    }
});

const Status = mongoose.model("Status", statusUpdate);
module.exports = Status