const express = require('express')
const {findById, addUser, getUsers, remove, editAll, editSomeone} = require('./controllers')
const router = express.Router()

// router.route('/login')
//     .post(login)

router.route('/users')
    .get(getUsers)
    .post(addUser)
    

router.route('/users/:id')
    .get(findById)
    .put(editAll)
    .patch(editSomeone)
    .delete(remove)

module.exports = router