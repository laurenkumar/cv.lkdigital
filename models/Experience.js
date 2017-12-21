var mongoose = require('mongoose');
var experienceSchema = new mongoose.Schema({
    titre: String,
    entreprise: String,
    date: Date,
    description: String,
    contrat: String,
    location: String,
    logo: String,
});

var Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;