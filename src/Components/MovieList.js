import React, {useState}  from 'react'
import { Outlet } from 'react-router-dom'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
  return (
    <div className="container">

<Outlet/>
{movies.map(movie => <MovieCard movie={movie}/>)}



    </div>
  )
}

export default MovieList
