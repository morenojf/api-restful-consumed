var mongoose = require('mongoose');


var postModel = new mongoose.Schema({
    userId: String , 
    description: String, 
    likes: Number
}, {timestamps: true});


module.exports = postModel;
