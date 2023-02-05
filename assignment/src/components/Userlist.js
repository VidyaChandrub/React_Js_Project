import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';

const Userlist = () => {

  const [userdata,setUserdata] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:8000/data")
    .then((res)=>{
      setUserdata(res.data);
    })
    .catch((err)=>{
      console.log(err.message);
    })
  },[]);
    
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <div className='card-title'>
              <div>
                <Link to={"/user/create"} className="btn btn-success">Add (+)</Link>
              </div>
            </div>
            <div className='card-body'>
          <table className='table table-hover table-bordered'>
            <thead className='bg-dark text-white'>
              <tr>
                <th>Id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Phonenumber</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {
                  Array.isArray(userdata) && userdata.map(user => (
                    <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.phoneNumber}</td>
                      <td>{user.age}</td>
                      <td>
                        <a className='btn btn-warning ms-2'>Edit</a>
                        <a className='btn btn-danger ms-2'>Remove</a>
                        <a className='btn btn-primary ms-2'>Details</a>
                      </td>
                    </tr>
                  ))
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Userlist;