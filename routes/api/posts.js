const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

router.get('/', postsCtrl.index);
router.post('/', postsCtrl.create);
router.get('/:id', postsCtrl.show);

module.exports = router;