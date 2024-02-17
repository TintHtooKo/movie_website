import React, { useEffect, useState } from 'react'
import './Card.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

export default function Card({movie}) {
    const[loading,setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1500)
    },[])

  return (
    <>
    {
        loading ?
        <div className='cards'>
            <SkeletonTheme color="#202020" highlightColor='#444'>
                <Skeleton height={300} duration={2}/>
            </SkeletonTheme>
        </div>
        :
        <Link to={`movie/${movie.id}`} style={{textDecoration:'none',color:'white'}}>
            <div className='cards'>
                <img className='cards-img' src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path: ""}`}/>
                <div className='cards-overlay'>
                    <div className='cards-title'>{movie?movie.original_title: ""}</div>
                    <div className='cards-runtime'>
                        {movie?movie.release_date: ""}
                        <span className='cards-rating'>{movie?movie.vote_average: ""}<i className='fas fa-star'/></span>
                    </div>
                    <div className='cards-desc'>{movie?movie.overview: ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
  )
}
