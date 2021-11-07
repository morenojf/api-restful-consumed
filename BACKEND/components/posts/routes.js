const express = require('express')
const {findById, addPost, getPosts, remove, editAll, editSomeone} = require('./controllers')
const router = express.Router()

router.route('/posts')
    .get(getPosts)
    .post(addPost);
    

router.route('/post/:id')
    .get(findById)
    .put(editAll)
    .patch(editSomeone)
    .delete(remove)

module.exports = router