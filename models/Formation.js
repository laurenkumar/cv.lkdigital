var mongoose = require('mongoose');
var formationSchema = new mongoose.Schema({
    titre: String,
    ecole: String,
    datedebut: Date,
    datefin: Date,
    description: String,
    diplome: String,
});

var Formation = mongoose.model('Formation', formationSchema);

module.exports = Formation;