const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema (
    {
    user: { type: Schema.Types.ObjectId, ref: 'user'},
        text: { type: String, required: false },
     content: { type: String, required: false }
      ,
});



module.exports = mongoose.model('Post', postSchema);