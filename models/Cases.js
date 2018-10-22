const mongoose = require('mongoose')


const donationSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: '',
        required:true
      },
      timestamp: {
        type: Date,
        default: Date.now()
      },
    case:{
        type: String,
        default:'donation'
    },
    pledgeduration:{
        type:Number,
        default:'2',
        required:true
    },
    pledgeamount:{
        type:Number,
        default:'10000',
    }
})

const productSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: '',
        required:true
      },
    typeof:{
        type:String,
        default:'technology',
        required:true

    },
    timestamp: {
        type: Date,
        default: Date.now()
      },
    case:{
        type: String,
        default:'donation'
    },
    pledgeduration:{
        type:Number,
        default:'2',
        required:true
    },
    pledgeamount:{
        type:Number,
        default:'10000',
    }
})

module.exports = mongoose.model('donation', donationSchema);
module.exports = mongoose.model('product', productSchema);
