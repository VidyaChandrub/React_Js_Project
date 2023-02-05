import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Users = () => {
  const [userdata, setUserdata] = useState(null);
  const navigate = useNavigate

  const LoadDetail=(id)=>{
      navigate("/user/"+id);
  }

  const RemoveDetail=(id)=>{
    if(window.confirm("Do you want Remove?")){
      fetch("https://blue-journalist-bbrpv.ineuron.app:4000/user/"+id,{
        mode: 'no-cors',
        method:"DELETE",
        
       }).then(
        (res)=>{
            alert("Removed Successfully");
            window.location.reload();
        }).catch((err)=>{
            console.log(err.message);
        })
    }
  }

  const editDetail=(id)=>{
    navigate("/user/"+id);
  }

  useEffect(() => {
    fetch("https://blue-journalist-bbrpv.ineuron.app:4000/users").then((res) => {
        return res.json();
    }).then((resp) => {
        setUserdata(resp);
    }).catch((err) => {
        console.log(err.message);
    })
}, [])

  return (
    <>
    
    <section className="contact-list">
  
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-title">
                  <h2>Users List</h2>
                </div>
                <div className="card-body">
                  <div>
                  <Link to={"/user/create"} className='btn btn-success'>Add New (+)</Link>

                  </div>
                 
                  <table className='table table-bordered'>
                    <thead className='bg-dark text-white'>
                      <tr>
                        <td>Id</td>
                        <td>Firstname</td>
                        <td>Lastname</td>
                        <td>Age</td>
                        <td>Phonenumber</td>
                        <td>Action</td>
                      </tr>
                    </thead>
                    <tbody>
                    
                        { Array.isArray(userdata) && userdata.map(item => (
                          <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.age}</td>
                            <td>{item.phoneNumber}</td>
                            <td><a onClick={()=>{editDetail(item._id)}} className='btn btn-success '>Edit</a>
                            <a onClick={()=>{RemoveDetail(item._id)}} className='btn btn-danger'>Remove</a>
                            <a onClick={()=>{LoadDetail(item._id)}} className='btn btn-primary'>Details</a>
                            </td>
                          </tr>
                        ) )
                        }
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </section>
    </>
  );
}

export default Users