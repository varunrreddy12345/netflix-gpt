const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-4 md:px-12 text-white bg-gradient-to-r from-black/80 via-black/40 to-transparent">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold w-full md:w-1/2 leading-tight">
        {title}
      </h1>

      <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg lg:text-xl w-full md:w-1/3 leading-relaxed text-gray-200">
        {overview}
      </p>

      <div className="flex flex-wrap gap-3 md:gap-4 mt-5 md:mt-6">
        <button className="bg-white text-black px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base rounded-md font-semibold hover:bg-gray-200 transition">
          ▶ Play
        </button>

        <button className="bg-gray-600/70 text-white px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base rounded-md font-semibold hover:bg-gray-500 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
