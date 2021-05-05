const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema (
//     {
//     user: { type: Schema.Types.ObjectId, ref: 'user'},
//         text: { type: String, required: false },
//      content: { type: String, required: false }
//       ,
// });
{
    name: { type: String, required: true },
    age: { type: Number, default: 0 },
    breed: { type: String, default: "Mixed" }
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model('Post', postSchema);