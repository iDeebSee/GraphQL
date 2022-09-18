const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: String, 
    genre: String, 
    year: Number,
})

module.exports = new mongoose.model('Movie', movieSchema);