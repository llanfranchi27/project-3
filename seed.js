require('dotenv').config();
require('./config/database');

const Post = require('./models/post');

(async function() {
  await Post.deleteMany({});
  const posts = await Post.create([
    {name: 'Bell', age: 4, breed: 'Dobermann'},
  ]);
  console.log(puppies)
  process.exit();
  
})();