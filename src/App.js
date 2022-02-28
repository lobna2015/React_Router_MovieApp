import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {v4 as uuidv4} from 'uuid'

function App() {


  const [rate, setRate] = useState(1);


  const [name, setName]= useState('lobna');
  const [job, setJob]= useState('web dev')
  const [age, setAge] = useState(28);
  const [show, setShow] = useState(true);


  const [user, setUser] = useState({
    lastName :"",
    email:""
  })

  
  const [list, setList] = useState([])

const handleInput = (e) => { setUser({...user, [e.target.name]: e.target.value}) }

const addUser = () => {
setList([...list, user])
setUser({lastName: "", email: ""})

}


const  onStarClick = (nextValue, prevValue, name) =>{
  setRate(nextValue);
}

  return (
    <div className="App">
      <button onClick={ ()=> {setShow(!show)}}>toggle</button>
{show && <h1>ismi {name} ne5dem {job}</h1> }
<input type="number" name="firstName" placeholder="enter" onChange={ (e)=> { setAge(e.target.value)}}></input>
   <hr/> <h3>{age}</h3> <hr/>

<input type="text" name="lastName" placeholder='lastname' onChange={handleInput} value={user.lastName}></input>
<input type="text" name='email' placeholder='email' onChange={handleInput} value={user.email}></input>

<button onClick={addUser}>Add User</button>
   
   <h1>{ user.lastName}</h1>
   <h1> {user.email}</h1>
   <h1>
      {list.map(elt => 
      <div>
     <h5>{elt.lastName} </h5>
     <h5>{elt.email} </h5>
   </div>
   )} 
   </h1>
<hr/>
   <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rate}
          onStarClick={onStarClick}
        />
<hr/>

<h1>{rate}</h1>
    </div>
  );
}

export default App;




