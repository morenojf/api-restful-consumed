const mongoose = require('../../../common/services/mongodb');
const postModel = require('../model');

const Post = mongoose.model('Post', postModel);

const getPosts = async(req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts)
    } catch (error) {
        return res.status(404).json({ message: "error: something went wrong"})
    }
}

const addPost = async(req, res) => {
    try {
        const post = new Post(req.body)
        await post.save()
        const succesfull = "Se ha publicado con éxito"
        res.status(200).json({ ok: succesfull })
    } catch (error) {
        return res.status(500).json({ message: "We couldn't upload your post" })
    }
}


const findById = async(req, res) =>{
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }catch (error){
        return res.status(500).json({message: "error: we are sorry, we couldn't finde the post you are looking for"})
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

module.exports = {findById, addPost, getPosts, remove, editAll, editSomeone};