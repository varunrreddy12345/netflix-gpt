const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-12 text-white bg-gradient-to-r from-black/80 via-black/40 to-transparent">
      
      <h1 className="text-5xl md:text-6xl font-bold w-1/2">
        {title}
      </h1>

      <p className="mt-4 text-lg md:text-xl w-1/3 leading-relaxed text-gray-200">
        {overview}
      </p>

      <div className="flex gap-4 mt-6">
        <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
          ▶ Play
        </button>

        <button className="bg-gray-600/70 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-500 transition">
          More Info
        </button>
      </div>

    </div>
  );
};

export default VideoTitle;