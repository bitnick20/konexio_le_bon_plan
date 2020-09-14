const mongoose = require('mongoose');
const User = require('./user.models');
const Announcement = require('./announcement.models');


const MessageSchema = new mongooose.Schema ({
    recipient_user_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    sender_user_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    announcement_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Announcement",
        required : true
    },  
    content: String,
    price: String,
    created: {
        type: Date,
        default: Date.now
    }
})



const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;