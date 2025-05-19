import { movies } from './data/movies';
import MovieList from './components/MovieList';
import Hero from './components/Hero';

function App() {
  // Authentication state is not used in this layout
  const isAuthenticated = false;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md relative z-10">
        <div className="mx-auto px-4 py-3 flex items-center justify-between w-full">
          {/* Home Button */}
          <div className="flex items-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md font-semibold transition-colors duration-200 mr-6">Home</button>
            {/* Navigation Links */}
            <nav className="flex items-center space-x-6 text-gray-700 text-sm">
              <a href="#" className="hover:text-orange-500">Movie Recommender</a>
            </nav>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md font-semibold transition-colors duration-200">Sign-Up</button>
            <button className="text-orange-500 hover:text-orange-600 font-semibold">Log-In</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Movie List Section - You might want to adjust the margin-top if the hero has a fixed height */}
      <main>
        <MovieList movies={movies} />
      </main>
    </div>
  );
}

export default App;
