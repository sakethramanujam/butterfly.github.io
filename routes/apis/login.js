const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const cors = require('cors')


const mongoose = require('mongoose')
mongoose.connect(process.env.MLAB_URI)

app.use(cors())


function logger(req, res, next) {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip)
  next();
}

bodyparser.urlencoded({
  extended: false
});
app.use(bodyparser.urlencoded({
  extended: false
}));

// Not found middleware
app.use((req, res, next) => {
  return next({
    status: 404,
    message: 'not found'
  })
})
app.use((req, res, next) => {
  return next({
    stattus: 200,
    message: 'success'
  })
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