const mongoose = require('../../../common/services/mongodb');
const userModel = require('../models');
// const jwt = require('jsonwebtoken')



const Usuario = mongoose.model('User', userModel)

const getUsers = async(req, res) => {
    try {
        const users = await Usuario.find();
        res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

const addUser = async(req, res) => {
    try {
        const user = new Usuario(req.body)
        await user.save()

        res.status(200).json({ ok: true })
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

const findById = async(req, res) =>{
    try{
        const user = await Usuario.findById(req.params.id)
        res.status(200).json(user)
    }catch (error){
        return res.status(500).json({message: 'error: no se ha podido encontrar el usuario'})
    }
}

const editAll = async(req, res) => {
    try {
        const { body } = req;
        const filter = { _id: mongoose.Types.ObjectId(req.params.id) };
        const update = body;

        const doc = await Usuario.findOneAndUpdate(filter, update, { new: true });

        if (!doc)
            return res.status(404).json({ message: `_id ${req.params.id} doesn't exists` })

        res.status(200).json(doc)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

const editSomeone = async(req, res) => {
    try {
        const { body } = req;
        const filter = { _id: mongoose.Types.ObjectId(req.params.id) };
        const update = body;
        delete body._id
        const doc = await Usuario.findOneAndUpdate(filter, update, { new: true });

        if (!doc)
            return res.status(404).json({ message: `_id ${req.params.id} doesn't exists` })

        res.status(200).json(doc)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

const remove = async(req, res) => {
    try {
        const filter = { _id: mongoose.Types.ObjectId(req.params.id) };
        let response = await Usuario.deleteOne(filter)
        res.status(200).json({ OK: true, deletedCount: response.deletedCount })
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

// const login = async(req, res) => {
//     try {
//         const username = await Usuario.username;
//         const user = {user: username}
//         const accesToken = jwt.sign(user, process.env.MI_PEQUEÑO_SECRETO)
//         res.status(200).json({accesToken: accesToken});
//     } catch (error) {
//         return res.status(500).json({ message: error })
//     }
// }
module.exports = {findById, addUser, getUsers, remove, editAll, editSomeone};

