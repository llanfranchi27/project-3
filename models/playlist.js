const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema ({
    song_id: { type: String, required: true },
    song_name: { type: String, default:'' },
    duration: { type: Number, default: 0 },
    artist: { type: String, default: '' },
    thumbnail: { type: String, default: '' },
    created_at: { type: String, default: '' },
    number: { type: String, default: '' },
    type: { type: String, default: '' }
});

const playlistSchema = new Schema ({
    list_name: { type: String, required: true },
    songs: [songSchema],
    author_name: { type: String, required: true },
    author_id: { type: String, required: true };
    user: { type: Schema.Types.ObjectId, ref: 'User' }
},{
    timestamps: true
});

module.exports = mongoose.model('Playlist', playlistSchema);