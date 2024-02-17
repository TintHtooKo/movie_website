import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../movieList/movieList";

export default function Home() {

  const [popularMovie,setPopularMovie] = useState([])
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=c5521a9ac7fc79e52493c999249f9083" )
    .then(res => res.json())
    .then(data => setPopularMovie(data.results))
  }, []);
  return (<>
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
       >
        {
          popularMovie.map((movie)=>(
            <Link style={{textDecoration:"none",color:"white"}} to={`movie/${movie.id}`}>
            <div className="posterImage">
              <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
              <div className="posterImage_overlay">
              <div className="posterImage_title">{movie ? movie.original_title : ""}</div>
              <div className="posterImage_runtime">
                {movie ? movie.release_date : ''}
                <span className="posterImage_rating">
                  {movie ? movie.vote_average : " "}
                  <i className="fas fa-star"/>{" "}
                </span>
              </div>
              <div className="posterImage_desc">{movie ? movie.overview: ""}</div>
            </div>
            </div>
            
            </Link>
          ))
        }
      </Carousel>
      <MovieList/>
    </div>
  </>);
}
