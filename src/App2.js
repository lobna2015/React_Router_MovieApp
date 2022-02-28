import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import MovieList from './Components/MovieList'
import AddMovie from './Components/AddMovie'
import NavBar from './Components/NavBar'
import Trailer from './Components/Trailer'

import {Route, Routes} from 'react-router-dom'

import './App.css'
import MovieCard from './Components/MovieCard'


const movies = [
    {id : uuidv4(), 
    movieName : 'LA DAGA',
    movieImage : 'https://th.bing.com/th/id/R.331871a801dbf72abd84c1f8fdb33e93?rik=Crxf98ergs7NtQ&riu=http%3a%2f%2fcedric974.c.e.pic.centerblog.net%2fo%2f400776d9.jpg&ehk=J%2ffjfEg1AY5TBPwmWsBSpRA%2b7lJxXPxLGZOwS7tnX%2fw%3d&risl=&pid=ImgRaw&r=0',
    movieRating:4,
    trailer:'https://www.youtube.com/watch?v=QLnDTHbJtXg&ab_channel=imineoBandesAnnonces'
    },
    {id : uuidv4(), 
        movieName : 'SKYSCRAPER',
        movieImage : 'https://th.bing.com/th/id/R.e8e2df8af738846290b75a9def76fd67?rik=ct9SZImDfG%2f3gg&riu=http%3a%2f%2fimages.fan-de-cinema.com%2faffiches%2flarge%2f75%2f165222.jpg&ehk=LPFZCpi6Njt7UDErltp35i7m%2bWLXPGHrHIfgFU9Yeeg%3d&risl=&pid=ImgRaw&r=0',
        movieRating:5,
        trailer: 'https://www.youtube.com/watch?v=t9QePUT-Yt8&ab_channel=UniversalPictures'
        },
        {id : uuidv4(), 
            movieName : 'GOWBOYS',
            movieImage : 'https://th.bing.com/th/id/R.2ee7110f786631bc8f6cc98a0e14af7a?rik=2yBtzQuLEQ2ESw&riu=http%3a%2f%2ftatakiki.t.a.pic.centerblog.net%2fo%2f7ad864e4.jpg&ehk=s14BxTVEgAFIGbRNq4rxHbiEaGGNWF6ESiur6lORe%2bk%3d&risl=&pid=ImgRaw&r=0',
            movieRating:3,
            trailer: 'https://www.youtube.com/watch?v=HsJ1HvLvdnI&ab_channel=ColemanAlease'
            },
            {id : uuidv4(), 
                movieName : 'DJANGO',
                movieImage : 'https://th.bing.com/th/id/R.289fb77a468439023f3e3fdd658ffa6c?rik=hWH6ff2Jbxn%2fOg&riu=http%3a%2f%2ffolkr.fr%2fwp-content%2fuploads%2f2018%2f01%2ftop-20-affiches-de-films-2017-folkr-django.jpg&ehk=oIYHihchvoO58N3Mtu5Jsfp1PxNwp4lnV0Pw%2ftcpec4%3d&risl=&pid=ImgRaw&r=0',
                movieRating:2,
                trailer: 'https://www.youtube.com/watch?v=vHqvpn5kACM&ab_channel=CGEntertainment'
                },
                {id : uuidv4(), 
                    movieName : 'ISLAND',
                    movieImage : 'https://th.bing.com/th/id/R.18f17d2e1075b21f5f52001c5f5f21a9?rik=YpfXwruMeU0i5w&riu=http%3a%2f%2fmissnombril.m.i.pic.centerblog.net%2fo%2f3ef2cf81.jpg&ehk=6ZMcnqZo5vSSUXOsF23Xzn%2bszKOttr6xY972t%2flP%2bMY%3d&risl=&pid=ImgRaw&r=0',
                    movieRating:2,
                    trailer: 'https://www.youtube.com/watch?v=5iaYLCiq5RM&ab_channel=watchCulturetainment'
                    },
                    {id : uuidv4(), 
                        movieName : 'AVENGERS',
                        movieImage : 'https://media.paperblog.fr/i/535/5350430/the-avengers-laffiche-film-bande-annonce-L-5aUlXS.jpeg',
                        movieRating:4,
                        trailer: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8&ab_channel=MarvelEntertainment'
                        }


]


function App2  () {
    
const [updateMovie, setUpdateMovie] = useState(movies);
const [textInput, setTextInput] = useState("")
const getData2= (data) =>{
    //faire get textSearch from navBar
    setTextInput(data)
    }
console.log('wararararararar',textInput);


const [nbrRate, setNbrRate] = useState(0)

const getRate = (rate) => { 
    setNbrRate(rate);
    console.log('hhhh',rate);
    
console.log('yeees',nbrRate);

}
    const getData = (data) => { 
        console.log(data);
       setUpdateMovie([...updateMovie, data])
       console.log('newwwwwwwwMovie',updateMovie)
    }

  return (
    <div className="App2">
        <div className="navv">
            <NavBar getData2={getData2} getRate={getRate}/>
        </div>

<div className="container">





</div>


<Routes>

<Route path="/" element={<MovieList movies={updateMovie.filter(movie=>movie.movieName.toLowerCase().includes(textInput.toLowerCase()) && movie.movieRating>=nbrRate)}/>}>

  <Route path='/trailer/:movieId' element={<Trailer movies={updateMovie}/>}></Route>

</Route>



</Routes>

<AddMovie getData={getData} />

    </div> 
  )
}

export default App2