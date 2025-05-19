import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

const MovieCard = ({ movie }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Movie Image with Zoom Effect */}
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover Info Overlay */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-end p-4 text-white transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-lg font-bold mb-1">{movie.title}</h3>
          <p className="text-sm mb-3 line-clamp-4">{movie.synopsis || 'No synopsis available.'}</p>
          {/* Add more details or buttons here if needed */}
          <button className="self-start text-sm font-semibold text-blue-400 hover:underline">View Details</button>
        </div>
      </div>

      {/* Movie Info (always visible below the image) */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{movie.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{movie.year}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-medium text-gray-700">{movie.rating}/10</span>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            {isLiked ? (
              <HeartSolidIcon className="w-6 h-6 text-red-500" />
            ) : (
              <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard; 