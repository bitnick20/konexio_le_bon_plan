const mongoose = require('mongoose');
const City = require('./city.models');
const User = require('./user.models');

const AnnouncementSchema = new mongooose.Schema ({
    user_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    city_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "City",
        required : true
    },   
    title: String,
    price: String,
    created: {
        type: Date,
        default: Date.now
    }
})



const Announcement = mongoose('Announcement', AnnouncementSchema);

module.exports = Announcement;