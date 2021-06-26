const express = require('express');
const router = express.Router();
const movies = require('../controllers/movies');


router.get('/', movies.displayMovie);
router.get('/categories/:category', movies.displayMovieCategory);
router.get('/search', movies.searchByMovieTitle);
router.get('/:id', movies.getByMovieId);

module.exports = router;