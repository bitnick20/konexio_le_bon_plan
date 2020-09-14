const mongoose = require('mongoose');
const Announcement = require('./announcement.models');

const PictureSchema = new mongooose.Schema ({
    announcement_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Announcement",
        required : true
    },
    picture: { 
        data: Buffer, 
        contentType: String,
        url: String,
    }, 
    created: {
        type: Date,
        default: Date.now
    }
})



const Picture = mongoose.model('Picture', PictureSchema);

module.exports = Picture;