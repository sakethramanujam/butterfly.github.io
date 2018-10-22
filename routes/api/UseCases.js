const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const assert = require('assert')
const cors = require('cors');

const app = express();

const donation =  require('../../models/Cases');

app.use((req, res, next) => {
    return next({status: 404, message: 'not found'})
  })
app.use((req,res,next)=>{
return next({stattus:200,message:'success'})
})
// Error Handling middleware
app.use((err, req, res, next) => {
  let errCode, errMessage

  if (err.errors) {
    // mongoose validation error
    errCode = 400 // bad request
    const keys = Object.keys(err.errors)
    // report the first validation error
    errMessage = err.errors[keys[0]].message
  } else {
    // generic or custom error
    errCode = err.status || 500
    errMessage = err.message || 'Internal Server Error'
  }
  res.status(errCode).type('txt')
    .send(errMessage)
})


const url = 'mongodb://admin:admin123@ds053139.mlab.com:53139/finathon'
app.use(bodyParser.json());

app.get('/usecases',function(req,res,next){

})

app.post('/newcase',function(req,res,next){
    var item = {
        title : req.body.title,
        content : req.body.content,
        timestamp : req.Date,
        author : req.body.author,
        casetype: req.body.casetype
    };
    mongo.connect(url,function(err,db){
        assert.equal(null);
        });

    res.redirect('/usecases');

});

app.get('/update',function(req,res,next){

})
app.get('/delete',function(req,res,next){

})