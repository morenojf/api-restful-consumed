var mongoose = require('mongoose');


var likeModel = new mongoose.Schema({
    userId: String,
    postId: String
}, {timestamps: true});


module.exports = likeModel;