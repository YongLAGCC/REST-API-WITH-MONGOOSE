//create two folders, data(for mongodb) & rest-api-playlist(for app)
// run Mongodb on the background by search start mongo mac(brew start ..)
// autofill package by Json file by comment line: npm init -y 
// install express by comment line: npm install express --save
// built index.js (for main) file & routes(for router) file. 
//write get,post.. and test it by postman
// after post a body on postman (by bodyparser), send to clients by calling
// create a models folder with a ninja file and create schema and model 
//connect to mongoose by post. 
//save ninja models to mongoose by mongodb method, then reture it back


const express =require('express'); 
//const routes = require('./routes/api'); //(line 29) import router file here
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); //connect mongoose


// set up express app
const app = express(); 
// connect mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise; // let mongoose promise equals global promise
// mongoose version promise is deprecated 

app.use(bodyParser.json());   

//initialize routes
app.use('/api', require('./routes/api'));    // use the router file

// error handling middleware (validation, eg, no name, it will fail)
app.use(function(err,req,res,next) {
    res.status(422).send({error:err.message});
})


// listen for requests 

app.listen(process.env.port || 3000, function() {
    console.log('listening for request'); 
}); 