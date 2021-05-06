const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema (
{
    name: { type: String, required: true },
    text: { type: String, default: "Text" },
    subject: { type: String, default: "Subject" },

  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model('Post', postSchema);