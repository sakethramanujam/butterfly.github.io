const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const cors = require('cors')


const mongoose = require('mongoose')
mongoose.connect(process.env.MLAB_URI)

app.use(cors())


function logger(req, res, next) {
console.log(req.method + ' ' + req.path + ' - ' + req.ip )
next();
}


app.post('/register',function(req,res,next){
    
})