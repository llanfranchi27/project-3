const posts = require ('../../models/post');

module.exports = {
    index,
    create,
    show,
};

async function index(req, res) {
    req.body.user = req.user._id;
    const posts = await Post.find({});
    res.status(200).json(posts);
}

async function create(req,res) {
    const post = await Post.create(req.body);
    res.status(201).json(post);
}

async function show(req,res) {
    const post= await Post.findById(req.params.id);
    res.status(200).json(puppy);
}