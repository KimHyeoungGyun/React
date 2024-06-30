import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "react-bootstrap";
import api from "../api";
const MovieDetail = () => {
  // /movies/1 -> useParams()
  // /movies?id=1 -> useSearchParams()

  const { id } = useParams();
  console.log("[MovieDetail.jsx]", id);
  const [movieDetail, setMovieDetail] = useState(null);
  const [reviews, setReviews] = useState([]);
  const getMovieInfo = async () => {
    let res = await api.get(`movie/${id}?language=ko`);
    console.log("[MovieDetail.jsx]", res.data);
    setMovieDetail(res.data);
  };

  const getReviews = async () => {
    let res = await api.get(`/movie/${id}/reviews?language=en-US&page=1`);
    console.log(res.data);
    setReviews(res.data.results);
  };
  useEffect(() => {
    getMovieInfo();
    getReviews();
  }, []);

  return (
    <div>
      {movieDetail ? (
        <div className="container movie-details">
          <div className="poster">
            <img
              src={`https://www.themoviedb.org/t/p/original${movieDetail.poster_path}`}
              alt=""
            />
          </div>
          <div className="info">
            <div className="genre">
              {movieDetail.genres.map((item) => (
                <Badge bg="danger" key={item.id}>
                  {item.name}
                </Badge>
              ))}
            </div>
            <h1>{movieDetail.title}</h1>
            <h4>{movieDetail.tagline}</h4>
            <div>
              <span>{movieDetail.release_date}</span>
              <span>{movieDetail.runtime}분</span>
              <span>평점 : {movieDetail.vote_average}</span>
              <span>이용가 : {movieDetail.adult ? "청불" : "18세미만"}</span>
            </div>
            <div className="overview">{movieDetail.overview}</div>
          </div>
        </div>
      ) : (
        ""
      )}
  
      <div className="container review-box">
        {reviews.map((item) => (
          <div className="review-item" key={item.id}>
            <h4>{item.author}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
