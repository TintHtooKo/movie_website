import React, { useEffect, useState } from 'react'
import './movieList.css'
import { useParams } from 'react-router-dom'
import Card from '../card/Card'

export default function MovieList() {

    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        getData()
    },[type])

    const getData = () =>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=c5521a9ac7fc79e52493c999249f9083` )
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

  return (
    <div className='movieList'>
        <h2 className='listTitle'>{(type ? type: "POPULAR").toUpperCase()}</h2>
        <div className='list-card'>
            {
                movieList.map((movie)=>(
                    <Card movie={movie}/>
                ))
            }
        </div>
    </div>
  )
}
