const Movie = require('../models/movie');

exports.getMovies = function(request, response){
    Movie.find({},{_id:0, __v:0}, function(error, data){
        if (error) return error;
        response.send(data)
    });
};