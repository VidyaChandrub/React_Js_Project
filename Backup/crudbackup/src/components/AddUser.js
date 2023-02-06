import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddUser = () => {
    let [id , idChange] =useState("");
    let [firstname , fnameChange] =useState("");
    let [lastname, lnameChange] =useState("");
    let [age , ageChange] =useState("");
    let [phone , phoneChange] =useState("");
    let [action , actionChange] =useState(true);
    const navigate = useNavigate();
//    let[userdata,setUserdata] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
       const userdata = {firstname,lastname,age,phone,action};
        
    
        fetch("http://localhost:8000/data",{
        mode: 'no-cors',
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(userdata)
       }).then(
        (res)=>{
            alert("Saved Successfully");
           // return res;
            navigate("/");
        }).catch((err)=>{
            console.log(err.message);
        })
    }
    
    
    
  return (
    <div>
        <div className='row'>
            <div className='pffset-lg-3 col-lg-6'>
            <form className='container' onSubmit={handleSubmit}>
            <div className='card'>
                <div className='card-title'>
                    <h2>ADD USER</h2>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-log-12'>
                            <div className='form-group'>
                                <label>Id</label>
                                <input value={id} disabled="disabled" className='form-control'></input>
                            </div>
                        </div>

                        <div className='col-log-12'>
                            <div className='form-group'>
                                <label>Firstname</label>
                                <input required value={firstname} onChange={e=>fnameChange(e.target.value)} className='form-control'></input>
                            </div>
                        </div>
                        <div className='col-log-12'>
                            <div className='form-group'>
                                <label>Lastname</label>
                                <input required value={lastname} onChange={e=>lnameChange(e.target.value)} className='form-control'></input>
                            </div>
                        </div>
                        <div className='col-log-12'>
                            <div className='form-group'>
                                <label>Age</label>
                                <input required value={age} onChange={e=>ageChange(e.target.value)} className='form-control'></input>
                            </div>
                        </div>
                        <div className='col-log-12'>
                            <div className='form-group'>
                                <label>Phonenumber</label>
                                <input required value={phone} onChange={e=>phoneChange(e.target.value)} className='form-control'></input>
                            </div>
                        </div>
                        <div className='col-log-12'>
                            <div className='form-check'>
                                <input checked={action} onChange={e=>actionChange(e.target.checked)} type="checkbox" className='form-check-input'></input>
                                <label  className="form-check-label">Is Active</label>
                            </div>
                        </div>
                        <div className='col-log-12'>
                            <div className='form-group'>
                                <button type="submit" className='btn btn-success'>Save</button>
                                <Link to={"/"} className="btn btn-danger">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
            </div>
        </div>
        
    </div>
  )
}

export default AddUser