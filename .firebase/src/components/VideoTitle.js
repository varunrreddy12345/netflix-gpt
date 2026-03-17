

// const VideoTitle = ({ title, overview }) => {
//   return (
//     <div className="pt-36 px-12">
//     <h1>{title}</h1>
//     <p>{overview}</p>
//     <div>
//     <button>Play</button>
//     <button>More Info</button>
//     </div>
//     </div>
//   );
// };

// export default VideoTitle;

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white px-12 pt-40 w-1/2 z-20">
      <h1 className="text-5xl text-red-500">TEST MOVIE</h1>

      <p className="py-6 text-lg">{overview}</p>

      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-2 rounded-lg font-bold">
          ▶ Play
        </button>

        <button className="bg-gray-500 bg-opacity-50 px-6 py-2 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;