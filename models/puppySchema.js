const Schema = require("mongoose").Schema;

const postSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: false },
    breed: { type: Schema.Types.ObjectId, ref: "Breed" }
  },
  {
    timestamps: true,
  }
);

module.exports = puppySchema;