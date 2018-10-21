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
    fund: {
        type: Number,
        required: true
    },
    fund_received: {
        type: Number,
        required: true
    },
    backers: {
        name_person: {
            type:String,
            required: true
        },
        amount_received: {
            type: Number,
            required: true
        }
    },
    latitude: Number,
    longitude: Number,
    meta: {
        created_at : {type: Date,default: Date.now},
        updated: Number
    }
});