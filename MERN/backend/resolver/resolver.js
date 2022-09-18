const Movie = require('../model/model')

const resolver = {
    movies: () => {
        return Movie.find({})
    },
    moviesByName: (args) => {
        return Movie.find({name: new RegExp(`${args.name}`, 'i') }).exec()
    },
    movieByName: (args) => {
        return Movie.findOne({name: new RegExp(`${args.name}`, 'i') })
    },
    addMovie: (args) => {
        let movie = new Movie({
            name: args.name,
            genre: args.genre,
            year: args.year
        })
        
        movie.save()
        return movie
    }
   
}

module.exports = resolver