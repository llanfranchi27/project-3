const Playlist = require ('../../models/playlist');

module.exports = {
    index,
};

async function index(req, res) {
    req.body.user = req.user._id;
    const playlists = await Playlist.find({ author_id: req.params.id});
    res.status(200).json(playlists);
}