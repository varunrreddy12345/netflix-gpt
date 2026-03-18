import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);

  const [searchQuery, setSearchQuery] = useState("");
  const [moviesData, setMoviesData] = useState([]);

  // ✅ TMDB SEARCH FUNCTION
  const handleSearch = async () => {
    if (!searchQuery.trim()) return; // ✅ avoid empty search

    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          searchQuery,
        )}`,
        API_OPTIONS,
      );

      const json = await data.json();
      setMoviesData(json.results || []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="pt-24 md:pt-32 flex flex-col items-center px-3 sm:px-4">
      {/* 🔍 SEARCH BAR */}
      <form
        className="w-full md:w-1/2 bg-black/70 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2 sm:gap-3 border border-gray-700"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder={lang[langkey].gptSearchPlaceholder}
          className="flex-1 px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl bg-gray-900 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
        />

        <button
          type="submit"
          onClick={handleSearch}
          className="bg-gradient-to-r from-red-600 to-red-800 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-xl text-white font-semibold hover:scale-105 transition duration-300"
        >
          🔎 {lang[langkey].search}
        </button>
      </form>

      {/* 🎬 MOVIE RESULTS */}
      {moviesData.length > 0 && (
        <div className="flex overflow-x-auto gap-3 md:gap-4 p-4 md:p-6 w-full scrollbar-hide">
          {moviesData
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <div
                key={movie.id}
                className="min-w-[140px] sm:min-w-[160px] md:min-w-[200px] hover:scale-105 transition duration-300"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-xl w-full"
                />
                <h2 className="text-white text-xs sm:text-sm mt-2 text-center">
                  {movie.title}
                </h2>
              </div>
            ))}
        </div>
      )}

      {/* ❌ NO RESULTS MESSAGE */}
      {moviesData.length === 0 && searchQuery && (
        <h1 className="text-white mt-6 text-sm md:text-base text-center">
          No movies found 😢
        </h1>
      )}
    </div>
  );
};

export default GptSearchBar;
