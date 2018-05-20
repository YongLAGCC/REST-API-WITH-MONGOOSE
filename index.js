const express =require('express'); 
const routes = require('./routes/api'); // import router file here

// set up express app
const app = express(); 

//initialize routes
app.use('/api', routes);  // use the router file

// listen for requests 

app.listen(process.env.port || 3000, function() {
    console.log('listening for request'); 
}); 