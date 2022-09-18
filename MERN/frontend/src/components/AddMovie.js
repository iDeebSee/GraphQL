import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import { gql, useMutation } from '@apollo/client';

const AddMovie = gql`
    mutation addMovie($name: String!, $genre: String!, $year: Int!){
        addMovie(name: $name, genre: $genre, year: $year){
            name
            genre
            year
        }
    }
`

function AddMovies(event) {

    let name;
    let genre;
    let year;
    const [addMovie, { data, loading, error }] = useMutation(AddMovie);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    return (
        <div>
            <form onSubmit={e => { e.preventDefault(); addMovie({ variables: { name: name.value, genre: genre.value, year: parseInt(year.value) } }); name.value = ''; genre.value='';year.value=0 }}>
                <label>Name</label>
                <input type="text" required ref={node => { name = node; }} />
                {/* <input  onChange={(e) => console.log(e.target.value)} /> */}
                <label>Genre</label>
                <input type="text" required ref={node => { genre = node; }} />
                <label>Year</label>
                <input type="number" required ref={node => { year = node; }} />
                <button type="submit">Add Movie</button>
            </form>
            <br />
        </div>
    )
}

export default AddMovies