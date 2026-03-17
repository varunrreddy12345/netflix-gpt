import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 md:w-44 lg:w-48 flex-shrink-0 hover:scale-110 transition duration-300">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Movie Card"
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
