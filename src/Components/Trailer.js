import React from 'react'
import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';

const Trailer = ({movies}) => {

    const {movieId} = useParams();
    const foundMovie = movies.find(film => film.id === movieId);

    console.log(movieId,foundMovie);


  return (
    <div>

<ReactPlayer className="player"  width="1900px" height=" 800px" playing={true} muted controls url={foundMovie.trailer} />

    </div>
  )
}

export default Trailer