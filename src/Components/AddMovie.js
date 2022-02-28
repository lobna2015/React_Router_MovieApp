import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const AddMovie = ({getData}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const [addMovie, setAddMovie] = useState({});

    const handleInput = (e) => { 
   setAddMovie( {... addMovie, [e.target.name] : e.target.value} )}
    
const handleSubmit = (e) => { 

    e.preventDefault()
    getData(addMovie)
    setShow(false)
 }
return (
      <>
       
  
        <Modal show={show} onHide={handleClose} >

          <div className="modall">
            <h3>Information about my favorite film</h3>

        <input type="text" placeholder="movie name"  name='movieName' onChange={handleInput} />
        <input type="text" placeholder="movie image"  name='movieImage' onChange={handleInput} />    
        <input type="number" placeholder="movie rate"  name='movieRating' onChange={handleInput} />
        <button onClick={ handleSubmit } >Add Movie</button>
        </div>
        </Modal>

        <Button className="btnn" style={{backgroundColor:'darkgray'}} onClick={handleShow}/>
          
     
      </>
    )
}

export default AddMovie