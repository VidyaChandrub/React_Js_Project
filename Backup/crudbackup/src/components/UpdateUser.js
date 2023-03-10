import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
  const {userid}=useParams();
  //const[userdata,setUserdata] = useState({});
  useEffect(()=>{
    fetch("https://blue-journalist-bbrpv.ineuron.app:4000/users/"+userid).then((res) => {
        return res.json();
    }).then((resp) => {
       idChange(resp.id);
       fnameChange(resp.firstname);
       lnameChange(resp.lastname);
       ageChange(resp.age);
       phoneChange(resp.phone);
       activeChange(resp.active);
    }).catch((err) => {
        console.log(err.message);
    })
  },[]);

  let [id , idChange] =useState("");
    let [firstname , fnameChange] =useState("");
    let [lastname, lnameChange] =useState("");
    let [age , ageChange] =useState("");
    let [phone , phoneChange] =useState("");
    let [active , activeChange] =useState(true);
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
       const userdata = {firstname,lastname,age,phone,active};
        


       fetch("https://blue-journalist-bbrpv.ineuron.app:4000/user/"+userid,{
        mode: 'no-cors',
        method:"PATCH",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(userdata)
       }).then(
        (res)=>{
            alert("Saved Successfully");
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
                    <h2>EDIT USER</h2>
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
                                <input checked={active} onChange={e=>activeChange(e.target.checked)}type="checkbox" className='form-check-input'></input>
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

export default UpdateUser