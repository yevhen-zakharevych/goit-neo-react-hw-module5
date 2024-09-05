import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from "./MovieCast.module.css";

import { getMovieCast } from "../../api/MovieApi";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchCast = async () => {
      const cast = await getMovieCast(movieId);

      setCast(cast);
    };

    fetchCast();
  }, [movieId]);
  return (
    <ul>
      {cast &&
        cast.map((c) => (
          <li className={style.li} key={c.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${c.profile_path}`}
              alt={c.name}
            />
            <p>{c.name}</p>
          </li>
        ))}
    </ul>
  );
}

export default MovieCast;
