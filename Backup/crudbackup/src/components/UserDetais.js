import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetais = () => {
  const {userid}=useParams();
  const[userdata,setUserdata] = useState({});
  useEffect(()=>{
    fetch("https://blue-journalist-bbrpv.ineuron.app:4000/users/"+userid).then((res) => {
        return res.json();
    }).then((resp) => {
        setUserdata(resp);
    }).catch((err) => {
        console.log(err.message);
    })
  },[]);
  return (

    <div>
      {
      
        userdata && <div>
        <h1>The User name is : {userdata}({userdata.id})</h1>
        <h3>User Details</h3>
        <h5>Phone Number : {userdata.phone}</h5>
        <Link className="btn btn-danger"></Link>
        </div>
      }
    </div>
  )
}

export default UserDetais