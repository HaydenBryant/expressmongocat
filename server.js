const express = require('express');
const mongoose = require("mongoose");
const Cat = require("./models/Cat");

const app = express();
const port = 8080;

//connecting to mongodb
mongoose.connect('mongodb://' + process.env.IP + '/spellchecker', {useNewUrlParser: true})
    .then(() => console.log('MonogDB connected'));
    
    

app.use(express.static('public'));

app.get('/api', function(req, res) {
    const name = req.query.name;
    const email = req.query.email;
    console.log(name);
    console.log(email);
    res.send("Hello " + name + "! Your email is " + email);
});

app.get('/createCat', function(req, res) {
    const name = req.query.name;
    
    const kitty = new Cat({ name })
    kitty.save().then(() => console.log("Name Saved"))
    res.send("Hello, how are you " + name + "!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
