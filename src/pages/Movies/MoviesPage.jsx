import { useState, useRef } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getMovieByName } from "../../api/MovieApi";

import MovieList from "../../components/MovieList/MovieList";

import styles from "./MoviesPage.module.css";

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchInput = useRef(null);
  const [movies, setMovies] = useState(null);

  const onSearch = () => {
    setSearchParams({ query: searchInput.current.value });
  };

  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) {
      return;
    }

    const fetchMovies = async () => {
      const movies = await getMovieByName(query);

      setMovies(movies);
    };

    fetchMovies();
  }, [searchParams]);

  return (
    <>
      <div className={styles.container}>
        <input type="text" className={styles.input} ref={searchInput} />
        <button type="submit" onClick={onSearch}>
          Search
        </button>
      </div>

      {movies && <MovieList movies={movies} />}
    </>
  );
}

export default MoviesPage;
