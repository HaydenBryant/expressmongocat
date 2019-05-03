const Cat = require("./models/Cat");
const mongoose = require("mongoose");


//connecting to mongodb
mongoose.connect('mongodb://' + process.env.IP + '/spellchecker', {useNewUrlParser: true})
    .then(() => console.log('MonogDB connected'));

const kitty = new Cat({ name: 'Kyle' });
kitty.save().then(() => console.log('meow'));