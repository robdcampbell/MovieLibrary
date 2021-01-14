import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import notFound from "../images/noImage.png";

// const url =
//   "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
        console.log(poster);
        return (
          <Link key={id} to={`/movies/${id}`} className="movie">
            <article className="">
              {/*  */}
              <img src={poster === "N/A" ? notFound : poster} alt={title} />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
                {/*  */}
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
