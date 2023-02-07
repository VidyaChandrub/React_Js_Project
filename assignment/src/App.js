import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [query,setQuery] = useState(" ");
  const [apidata,setApidata] = useState("");

  useEffect(()=>{
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=bhopal&key=AIzaSyCLzjF1kXpMyN-4oG8jsjAQ2SnXFzVVN2Q")
    .then((response)=>{
      console.log(response.data.results);
    })
  },[]);



  

  /*const submitHandler =(searchitm)=>{
    console.log('search',searchitm) 
  } */
  return (
    <div>
     
      <form className='form-control'>
      <input type="text" value={query} placeholder='serach states..' className='form-group' onChange={(e)=>setQuery(e.target.value)}/>
      { Array.isArray(apidata) &&
        apidata.filter(item=>{
          if(query ===""){
            return item;
          }/* else if(item.location.toLowerCase().includes(query.toLocaleLowerCase()))
          {
            return item;
          } */
        }
        
        )
      }
      <input type="submit" value="Search" className='btn btn-success' /* onClick={() => submitHandler(query)} *//> 
      </form>
      
    </div>
  )
}

export default App