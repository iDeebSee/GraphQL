import React from 'react';
import { useQuery, gql } from '@apollo/client';

const allMovies = gql`
  query {
    movies {
      name
      genre
      year
    }
  }
`;

function Movies() {

    const { loading, error, data } = useQuery(allMovies);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data);
    return data.movies.map(({ id, name, genre, year }) => (
        <div key={id}>
            <h2>{name}</h2>
            <b>{genre}</b>
            <p>{year}</p>
            <br />
        </div>
    ));
}


export default Movies;