const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());

app.use(bodyParser.json());
// app.use('/get', );
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
    
    if(!SID || !TOKEN) {
        return res.json({
            message: "No SID or TOKEN"
        });
    }

    var client = require('twilio')(SID, TOKEN);
    client.sendMessage({
        to: req.body.phNo,
        from: SENDER,
        body: "Your freind has sent you a case from Butterfly"
    }, function(err, responseData) {
        if(!err) {
            res.json({
                "From": responseData.from,
                "Body": responseData.body
            })
        }
    })

})


app.listen(port, () => {
    console.log(`Server started on port ${port} 🔅 `);
});