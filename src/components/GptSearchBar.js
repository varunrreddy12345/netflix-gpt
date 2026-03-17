import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {

  const langkey = useSelector(store => store.config.lang);
  return (
    <div className="pt-32 flex justify-center">
      <form className="w-full md:w-1/2 bg-black/70 backdrop-blur-md p-4 rounded-2xl shadow-2xl flex gap-3 border border-gray-700">
        
        <input
          type="text"
          placeholder={lang[langkey].gptSearchPlaceholder} 
          className="flex-1 px-4 py-3 rounded-xl bg-gray-900 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-red-600 to-red-800 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-red-700/40 transition duration-300"
        >
          🔎 {lang[langkey].search}
        </button>

      </form>
    </div>
  );
};

export default GptSearchBar;