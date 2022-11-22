const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const moviesSchema = new Schema({
    id: Number,
    img: String,
    title: String,
    age: String,
    genre: Array
});
module.exports = mongoose.model('Movie', moviesSchema);
