var mongoose = require('mongoose');
var adminSchema = new mongoose.Schema({
    name: String,
    titre: String
    /*types: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Type'
        }
    ]*/
});

var Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;