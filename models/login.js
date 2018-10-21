// Details for login page.
// For Cases only.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reqSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    organization: {
        type: String
    },
    age:{
        type: Number,
        required: true
    },
    email:{ 
        type: String,
        required: True,
        unique: True
    },
    meta: {
        creation : {
            type: Date,
            default: Date.now
        }
        // last_login: {
        //     type: Date,
        //     default: Date.now
        // }
    }
});

// Schema.statistics.last_login = function login(id, callback) {
//     return this.findByIdAndUpdate(id, {$set : { 'last_login' : Date.now()}, { new: true},callback);
// }