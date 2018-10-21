const express  = require('express');
const mongoose = requrie('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use('/usecases',)