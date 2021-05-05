const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

router.get('/', postsCtrl.index);
router.post('/', postsCtrl.create);
router.get('/:id', postsCtrl.show);
router.put('/:id', postsCtrl.update);
router.delete('/:id', postsCtrl.delete);
module.exports = router;