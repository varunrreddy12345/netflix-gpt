import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopratedMovies } from "../utils/moviesSlice";
const useTopratedMovies = () => {
  const dispatch = useDispatch();
  const getTopratedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS,
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopratedMovies(json.results));
  };
  useEffect(() => {
    getTopratedMovies();
  }, []); // dependency array
};
export default useTopratedMovies;
