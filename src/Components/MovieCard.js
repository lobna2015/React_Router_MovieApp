import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom';



const MovieCard = ({movie}) => {



return(
 <div className="affich">
 <h3>  
{movie.movieName}  </h3>
 <form>


<Link to={`/trailer/${movie.id}`} >
 <img src={movie.movieImage}/>
 </Link>


 <br/>
 <br/>
 
     <StarRatingComponent className="star-rating"
           name="rate2" 
           editing={false}
           starCount={5}
              value={movie.movieRating}
         />
  </form>
  </div>
)
}

export default MovieCard


