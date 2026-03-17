
// import { useSelector } from "react-redux";
// import VideoBackground from "./VideoBackground";
// import VideoTitle from "./VideoTitle";

// const MainContainer = () => {
//   const movies = useSelector((store) => store.movies?.nowPlayingMovies);

//   if (!movies) return null;

//   const mainMovie = movies[0];
//   const { original_title, overview, id } = mainMovie;

//   return (
//     <div className="relative w-full h-screen">
//       {/* Background Video */}
//       <VideoBackground movieId={id} />

//       {/* Overlay Content */}
//       <div className="absolute inset-0 z-10 flex items-center px-10">
//         <VideoTitle title={original_title} overview={overview} />
//       </div>

//       {/* Gradient overlay (Netflix effect) */}
//       <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10"></div>
//     </div>
//   );
// };

// export default MainContainer;

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
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Background Video */}
      <VideoBackground movieId={id} />

      {/* 🔥 DARK OVERLAY (important for Netflix feel) */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-20 flex items-center px-10">
        <VideoTitle title={original_title} overview={overview} />
      </div>

      {/* 🔥 STRONG GRADIENT (smooth blending with cards) */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
    </div>
  );
};

export default MainContainer;