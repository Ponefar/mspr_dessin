const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const email = require('./mail/index.js');

let port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))

app.get("/", (req,res) => {
    res.send('Erreur')
})

app.post("/", (req,res) => {
    console.log('salut')
    let name = req.body.name
    let mail = req.body.mail
    if(name && mail) {
        email(res,name, mail)
    }
});

app.listen(process.env.PORT || 3001) 
