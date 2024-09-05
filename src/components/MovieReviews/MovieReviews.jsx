import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from "./MovieReviews.module.css";
import { getMovieReviews } from "../../api/MovieApi";

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchReviews = async () => {
      const reviews = await getMovieReviews(movieId);

      setReviews(reviews);
    };

    fetchReviews();
  }, [movieId]);

  return (
    <ul>
      {reviews &&
        reviews.map((r) => (
          <li className={style.li} key={r.id}>
            <h3>Author:{r.author}</h3>
            <p>{r.content}</p>
          </li>
        ))}
    </ul>
  );
}

export default MovieReviews;
