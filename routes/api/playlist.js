const express = require('express');
const router = express.Router();
const playlistsCtrl = require('../../controllers/api/playlists');

router.get("/:id", playlistsCtrl.index);

module.exports = router;