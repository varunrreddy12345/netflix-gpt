import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  if (!movies || movies.length === 0) return null;

  return (
    <div className="py-6 relative group">
      {/* Title */}
      <h1 className="text-white text-2xl font-bold px-6 mb-4">{title}</h1>

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="hidden group-hover:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white px-3 py-6"
      >
        ◀
      </button>

      {/* Movie Row */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-4 px-6 scroll-smooth"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="hidden group-hover:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white px-3 py-6"
      >
        ▶
      </button>
    </div>
  );
};

export default MovieList;
