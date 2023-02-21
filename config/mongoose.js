const mongoose = require('mongoose');

//mongoose.connect('mongodb+srv://Gummadavally:Mani24@projectcluster.tx9gp0v.mongodb.net/augment?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost/codeial_development')

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;