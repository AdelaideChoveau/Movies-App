const Movie = require('../models/catalogmovies')

exports.displayMovie = (req, res, next) => {
    Movie.find().then(movies => res.status(200).json({
        success: true,
        msg: "Displaying all movies",
        movies: movies
    })).catch(error => res.status(404).json({
        success: false,
        msg: "Whoops! Looks like there's no movies here 😨", 
    }));  
};

exports.displayMovieCategory = (req, res, next) => {
    Movie.find({category: req.params.category}).then(movies => res.status(200).json({
        success: true,
        msg: `Displaying all search results for '${req.params.category}'`,
        movies: movies
    })).catch(error => res.status(404).json({
        success: false,
        msg: `Whoops! Looks like there's no movies in '${req.params.category}' category 😨`, 
    }));  
};

exports.searchByMovieTitle = (req, res, next) => {
    Movie.find({category: req.query.title}).then(movie => res.status(200).json({
        success: true,
        msg: `Displaying all search results for '${req.query.title}'`,
        movie: movie
    })).catch(error => res.status(404).json({
        success: false,
        msg: `Whoops! Looks like there's no movies called '${req.query.title}' 😨`, 
    }));   
};

exports.getByMovieId = (req, res, next) => {
    Movie.findById(req.params.id).then(movie => res.status(200).json({
        success: true,
        movie: movie
    })).catch(error => res.status(404).json({
        success: false,
        msg: `No movie found with id '${req.params.id}'`, 
    }));   
};
