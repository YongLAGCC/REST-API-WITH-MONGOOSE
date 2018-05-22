const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create ninja Schema& model
const NinjaSchema = new Schema({
    name: {
        type: String, 
        required: [true,'Name field is required']
    },
    rank: {
        type: String, 
    },
    available: {
        type: Boolean, 
        default: false // it false by default, only specify it true then pass through
    }
    // add in geo location(for property( longitute or latitude) for ninja. ohterwise only radus


});
// ninja model to represent the collection of our database
const Ninja = mongoose.model('ninja', NinjaSchema); // add second paramster, for the structured model of schema

// to access it in all the files like to run
module.exports = Ninja; 

// next connct it to Mongoose.    