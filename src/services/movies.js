import MovieCollection from "../db/models/Movie.js"

export const getMovie = () => MovieCollection.find();
export const getMovieById = id => MovieCollection.findById(id);