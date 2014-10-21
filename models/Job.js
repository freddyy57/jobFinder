//referencia a mongodb
var mongoose = require('mongoose');

// Schema
var jobSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
});



mongoose.model('Job',jobSchema);




        
          
        

