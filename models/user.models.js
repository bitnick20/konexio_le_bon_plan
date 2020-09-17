const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema ({
    username: String,
    firstname: String,
    surname: String,
    password: String,
    picture: File,
    created: {
        type: Date,
        default: Date.now
    }
})


// Ici on va générer les méthode User.authenticate(), User.serializeUser(), User.deserializeUser()
// qui se trouvent dans le fichier index.js à la racine du dossier de travail
// (et pas dans le dossier models)

UserSchema.plugin(passportLocalMongoose);

const User = mongoose(passport.model('User', UserSchema));

module.exports = User;