const mongoose = require('mongoose');


const CitySchema = new mongooose.Schema ({
    name: String,
    postCode: String,
    created: {
        type: Date,
        default: Date.now
    }
})



const City = mongoose.model('City', CitySchema);

module.exports = City;