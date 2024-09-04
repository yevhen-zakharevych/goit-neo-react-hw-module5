import { useEffect } from "react";

import { getTrendingMovies } from "../../api/MovieApi";

function HomePage() {
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const movies = await getTrendingMovies();

      console.log(movies);
    };

    fetchTrendingMovies();
  }, []);
  return (
    <>
      <h1>Trending Today</h1>
    </>
  );
}

export default HomePage;
