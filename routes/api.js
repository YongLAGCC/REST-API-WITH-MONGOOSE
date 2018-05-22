
const express = require('express'); 
const router = express.Router(); 
const Ninja = require('../models/ninja'); // two dots taht goes to previous directory, then go to models folers 


// get a list of ninjas form the db
router.get('/ninjas', function(req,res,next){
    //res.send("GET")
    // Ninja.find({}).then(function(ninjas){  
    //     res.send(ninjas); 
    // });
    // pass geo
    
    Ninja.geoNear(
        {type: "Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance:100000, spherical: true} // optioins, values provided by users
    ).then(function(ninjas){
        res.send(ninjas);
    }).catch(next); // promise, fire whtn ninja complate the query
    //options
});


// add a new ninja to the db
router.post('/ninjas', function(req,res,next){
    //console.log(req.body); // send to middleware(body parser) but not in mongoose
    // var ninja = new Ninja(req.body); // after import Ninja from model file, then send to monogoose
    // ninja.save(); // mongo method to save it into mongoose
    Ninja.create(req.body).then(function(ninja){  // simple way to save it in mongoose instead of previous two lines.
    //cool thing, one line to req.body from Ninja, and send mongo, then callback
        res.send(ninja);
    }).catch(next);  //validation: if req.body fail, it will fail next


    // res.send({ 
    //     type:'POST',
    //     name: req.body.name, // send to clients on page by calling
    //     rank: req.body.rank
    //     // create a ninjas schema and model and send it to relevant collection of mongodb
    // });
});
//Models: 

// update a ninja in the db
router.put('/ninjas/:id', function(req,res,next){
    Ninja.findOneAndUpdate({_id:req.params.id}, req.body).then(function(){// mongo method "findOneAndUpdate" // & then function
        Ninja.findOne({_id:req.params.id}).then(function(ninja){ //(see delete method first) after updated, send a same id to client. 
            res.send(ninja);
        });
        //res.send(ninja);
    });
    //res.send({type:'PUT'});
});


//delete a ninja from the db
router.delete('/ninjas/:id', function(req,res,next){
    //console.log(req.params.id);
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    });
    //res.send({type:'DELETE'});
});
 
module.exports = router; 