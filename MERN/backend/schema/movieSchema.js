let express = require('express');
let { buildSchema } = require('graphql');

let schema = buildSchema(`
  type Query {
    movies: [Movie],
    moviesByName(name: String!): [Movie],
    movieByName(name: String!): Movie
  }

  type Mutation {
    addMovie(name: String!, genre: String!, year: Int!): Movie
  }

  type Movie {
    name: String,
    genre: String,
    year: Int
  }
`);


module.exports = schema;