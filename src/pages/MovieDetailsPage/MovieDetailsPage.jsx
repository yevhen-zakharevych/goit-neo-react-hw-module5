import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

import styles from "./MovieDetailsPage.module.css";

import { getMovieById } from "../../api/MovieApi";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchMovie = async () => {
      const movie = await getMovieById(movieId);

      setMovie(movie);
    };

    fetchMovie();
  }, [movieId]);

  return (
    <>
      <Link to={-1} className={styles.backButton}>
        &#8592; Go back
      </Link>
      {movie && (
        <>
          <div className={styles.container}>
            <div className={styles.image}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt={movie.title}
              />
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>{movie.title}</h2>
              <div className={styles.rating}>
                User Score: {(movie.vote_average * 10).toFixed(0)} %
              </div>
              <h3>Overview</h3>
              <p className={styles.text}>{movie.overview}</p>
              <h3>Genres</h3>
              <ul className={styles.genresList}>
                {movie.genres.map(({ id, name }) => (
                  <li key={id} className={styles.genresItem}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3>Additional information</h3>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li className={styles.infoItem}>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>

          <div>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;
