const express = require('express');
const movieController = require('../modules/movies/controllers/movieController');
const movieRouter = express.Router();

movieRouter.get('/', movieController.getMovies);

module.exports = movieRouter;