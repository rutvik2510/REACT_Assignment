import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 bg-gray-100">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="max-w-xs rounded overflow-hidden shadow-lg bg-white"
        >
          <img
            className="w-full h-48 object-cover"
            src={movie.poster}
            alt={`${movie.title} poster`}
          />
          <div className="p-4">
            <h3 className="font-bold text-lg">{movie.title}</h3>
            <p className="text-gray-700">Release Year: {movie.releaseYear}</p>
            <p className="text-gray-700">Genre: {movie.genre}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
