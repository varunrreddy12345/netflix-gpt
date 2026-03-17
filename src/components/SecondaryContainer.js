import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="relative z-20 -mt-44 px-6 pt-6 pb-10">
        <MovieList title="Top Rated" movies={movies.topratedMovies} />
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
