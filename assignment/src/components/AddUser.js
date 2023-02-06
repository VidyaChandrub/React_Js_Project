import { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddUser = () => {

  const [id,setId]=useState("");
  const [firstname,setFname]=useState("");
  const [lastname,setLname]=useState("");
  const [phone,setPhone]=useState("");
  const [age,setAge]=useState("");
  const [action,setAction]=useState("");
  const navigate = useNavigate();

  let handleSubmit = (e) =>{
    e.preventDefault();
    const userdata = {firstname,lastname,phone,age,action};

    fetch("http://localhost:8000/data",{
      
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(userdata)
     }).then(
      (res)=>{
          alert("Saved Successfully");
          
          navigate("/");
      }).catch((err)=>{
          console.log(err);
      })
  }


  return (
    <>
    
      <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
        <form className='container' onSubmit={handleSubmit}>
          <div className='card'>
            <div className='card-title'>
              <h1>Create user</h1>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-log-6'>
                <div className='form-group'>
                    <label>ID</label>
                    <input value={id} onChange={e=>setId(e.target.value)} className='form-control'></input>
                </div>
                </div>
                <br/>
                <div className='col-log-6'>
                <div className='form-group'>
                    <label>Firstname</label>
                    <input value={firstname} onChange={e=>setFname(e.target.value)} className='form-control'></input>
                </div>
                </div>
                <br/>
                <div className='col-log-6'>
                <div className='form-group'>
                    <label>Lastname</label>
                    <input value={lastname} onChange={e=>setLname(e.target.value)} className='form-control'></input>
                </div>
                </div>
                <br/>
                <div className='col-log-6'>
                <div className='form-group'>
                    <label>Phonenumber</label>
                    <input value={phone} onChange={e=>setPhone(e.target.value)} className='form-control'></input>
                </div>
                </div>
                <br/>
                <div className='col-log-6'>
                <div className='form-group'>
                    <label>Age</label>
                    <input value={age} onChange={e=>setAge(e.target.value)} className='form-control'></input>
                </div>
                </div>
                <br/>
                <div className='col-log-6'>
                <div className='form-check'>
                    
                    <input className='form-check-input' checked={action} onChange={e=>setAction(e.target.checked)}></input>
                    <label className='form-check-label'>Active</label>
                </div>
                </div>
                <div className='col-log-6'>
                <div className='form-group'>
                    <button type="submit" className='btn btn-success '>Save</button>
                    <Link to={"/"} className="btn btn-danger ms-2">Back</Link>
                </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
    </>
  )
}

export default AddUser