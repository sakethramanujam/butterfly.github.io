const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
var router = express.Router();
// app.use(cors());


router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
// app.get('/', (req, res)=> { return res.sendFile(__dirname + '/views/index.html')});
// Database Config
const db = process.env.MLAB_URI;
const port = process.env.PORT || 5000;

mongoose.connect(db, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("MongoDB connected 💾 😄");
    })
    .catch((err) => {
        console.log("Pssst!");
        console.log(err);
    });

app.get("/hello", (req, res) => {
    console.log(db);
    res.send("Hello World");
})

app.post('/sendSMS', bodyParser.json(), (req, res) => {
    let SID = process.env.TWILIO_SID;
    let TOKEN = process.env.TWILIO_AUTH;
    let SENDER = process.env.TWILIO_SENDER;

    if (!SID || !TOKEN) {
        return res.json({
            message: "No SID or TOKEN"
        });
    }

    var client = require('twilio')(SID, TOKEN);
    client.sendMessage({
        to: '+919985296699',
        from: '+12678332104',
        body: 'Jenny! Please give me another chance! <3'
    }, function (err, message) {
        if (err) {
            console.error('Text failed because: ' + err.message);
        } else {
            console.log('Text sent! Message SID: ' + message.sid);
        }
    });

})


app.listen(port, () => {
    console.log(`Server started on port ${port} 🔅 `);
});