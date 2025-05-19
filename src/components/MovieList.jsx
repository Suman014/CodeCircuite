import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 gap-x-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList; 