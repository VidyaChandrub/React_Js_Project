import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AddUser = () => {

  const [id,setId]=useState("");
  const [firstname,setFname]=useState("");
  const [lastname,setLname]=useState("");
  const [phone,setPhone]=useState("");
  const [age,setAge]=useState("");
  const [action,setAction]=useState("");

  useEffect(()=>{},[])
  return (
    <>
    
      <div className='row'>
        <div className='pffset-lg-3 col-lg-6'>
        <form className='container'>
          <div className='card'>
            <div className='card-title'>
              <h1>Create user</h1>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-log-6'>
                <div className='form-group'>
                    <label>ID</label>
                    <input className='form-control'></input>
                </div>
                </div>
                <br/>
                <div className='col-log-6'>
                <div className='form-group'>
                    <label>Firstname</label>
                    <input className='form-control'></input>
                </div>
                </div>
                <br/>
                <div className='col-log-6'>
                <div className='form-group'>
                    <label>Lastname</label>
                    <input className='form-control'></input>
                </div>
                </div>
                <br/>
                <div className='col-log-6'>
                <div className='form-group'>
                    <label>Phonenumber</label>
                    <input className='form-control'></input>
                </div>
                </div>
                <br/>
                <div className='col-log-6'>
                <div className='form-group'>
                    <label>Age</label>
                    <input className='form-control'></input>
                </div>
                </div>
                <br/>
                <div className='col-log-6'>
                <div className='form-check'>
                    
                    <input className='form-check-input'></input>
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