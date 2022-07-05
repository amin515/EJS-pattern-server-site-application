
const mongoose = require('mongoose');

const studentModels = mongoose.Schema({

    name : {
        type : String,
        required : [true, "Name filed require"]
    },
    email : {
        type : String,
        required : [true, "Email filed require"],
        
    },
    cell : {
        type : String,
        required : [true, "Name filed require"],
        
    },
    photo : {
        type : String
    },
},{
    timestamps : true
});


// students module exports
module.exports = mongoose.model('Student', studentModels)