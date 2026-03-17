// import { useSelector } from "react-redux";
// import useMovieTrailer from "../hooks/useMovieTrailer";

// const VideoBackground = ({ movieId }) => {
//   const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

//   useMovieTrailer(movieId);

//   if (!trailerVideo) return null;

//   return (
//     <div className="absolute top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
//       <iframe
//         className="w-screen h-screen object-cover scale-150"
//         src={
//           "https://www.youtube.com/embed/" +
//           trailerVideo.key +
//           "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
//           trailerVideo.key +
//           "&modestbranding=1&showinfo=0"
//         }
//         title="YouTube video player"
//         frameBorder="0"
//         allow="autoplay; encrypted-media"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default VideoBackground;
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  if (!trailerVideo) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      
      <iframe
        className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 object-cover"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo.key +
          "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
          trailerVideo.key +
          "&modestbranding=1&showinfo=0"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

    </div>
  );
};

export default VideoBackground;