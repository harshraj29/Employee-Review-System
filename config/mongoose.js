const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

mongoose.connect('mongodb+srv://rajh3282:3uz2D8Wv1cJngzFF@employeedb.egect2x.mongodb.net/Employeedb?retryWrites=true&w=majority')
      

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("Database Connected to : mongoDB");
});

module.exports = mongoose;





