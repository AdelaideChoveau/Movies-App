const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.get('/favorites', users.displayMyMovies);
router.post('/favorites', users.displayMyMovies);
router.delete('/favorites/:id', users.deleteMyMoviesFromFavorites);

module.exports = router;