import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies?.[0];
  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      {/* Background Video */}
      <VideoBackground movieId={id} />

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 md:bg-black/40 z-10"></div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-20 flex items-center px-4 sm:px-6 md:px-10">
        <VideoTitle title={original_title} overview={overview} />
      </div>

      {/* 🔥 BOTTOM GRADIENT */}
      <div className="absolute bottom-0 w-full h-24 md:h-32 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10"></div>
    </div>
  );
};

export default MainContainer;
