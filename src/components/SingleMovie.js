import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../useFetch";
import { BsArrowLeft } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <div className="loading">'Loading</div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          Back to Movies
        </Link>
      </div>
    );
  }
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <div className="single-movie-top">
          <h2>{title}</h2>
          <h4>{year}</h4>
        </div>
        <p>{plot}</p>
      </div>
      <Link to="/">
        <FaArrowLeft /> Back to Movies
      </Link>
    </section>
  );
};

export default SingleMovie;
