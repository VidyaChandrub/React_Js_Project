import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [query,setQuery] = useState(" ");
  const [apidata,setApidata] = useState("");

  useEffect(()=>{
    axios.get("")
    .then((response)=>{
      console.log(response.data.results);
    })
  },[]);

  



  

  /*const submitHandler =(searchitm)=>{
    console.log('search',searchitm) 
  } */
  return (
    <div>
     
      <form className='form-control'  method="get">
      <input type="search" value={query} placeholder='serach states..' className='form-group' onChange={(e)=>setQuery(e.target.value)}/>
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
