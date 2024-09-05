import { useEffect, useState } from "react";

import MovieList from "../../components/MovieList/MovieList";

import { getTrendingMovies } from "../../api/MovieApi";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const movies = await getTrendingMovies();

      setMovies(movies);
    };

    fetchTrendingMovies();
  }, []);
  return (
    <>
      <h1>Trending Today</h1>
      <main>
        <MovieList movies={movies} />
      </main>
    </>
  );
}

export default HomePage;
