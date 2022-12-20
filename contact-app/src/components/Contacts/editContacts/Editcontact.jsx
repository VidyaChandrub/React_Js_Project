import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {Link, useParams} from "react-router-dom"
import { ContactService } from '../../../services/ContactService';

const Editcontact = () => {

  let {contactID}= useParams();

  let [state,setState]=useState({
    loading:false,
    contact:{
      name:"",
      photo:"",
      mobile:"",
      email:"",
      company:"",
      title:"",
      groupId:""

    },
    groups:[],
    errorMessage:""
  });

  let {loading,contact,groups,errorMessage} = state;
  useEffect(async () => {
    try{
      setState({...state,loading:true})
      let response = await ContactService.getContacts(contactID);
      setState({...state,
      loading:false,
    contact:response.data})
    }
    catch(error){
      setState({...state,
      loading:false,
    errorMessage:error.message})
    }

  },[contactID]);

  let updateInput = (event) =>{
    setState({...state,
    contact:{
      ...state.contact,
      [event.target.name]:event.target.value
    }})
  }
  return (
    <>
    <section className='add-contact p-3'>
      <pre>{JSON.stringify(contact)}</pre>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h4 text-primary fw-bold">Edit Contact</p>
            <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium in voluptas! Fugiat impedit accusamus culpa, nulla error earum obcaecati, necessitatibus laborum vitae nihil deserunt dolorum a accusantium exercitationem voluptate.</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-4">
            <form >
              <div className="mb-2">
                <input type="text" required="true" name="name" value={contact.name} onChange={updateInput} placeholder='Name' className='form-control' />
              </div>
              <div className="mb-2">
                <input type="text"  required="true" name="photo" value={contact.photo} onChange={updateInput} placeholder='Photo url' className='form-control' />
              </div>
              <div className="mb-2">
                <input type="number"  required="true" name="mobile" value={contact.mobile} onChange={updateInput} placeholder='Mobile' className='form-control'/>
              </div>
              <div className="mb-2">
                <input type="email"  required="true" name="email" value={contact.email} onChange={updateInput} placeholder='Email' className='form-control'/>
              </div>
              <div className="mb-2">
                <input type="text"  required="true" name="company" value={contact.company} onChange={updateInput} placeholder='Company' className='form-control'/>
              </div>
              <div className="mb-2">
                <input type="text"  required="true" name="title" value={contact.title} onChange={updateInput} placeholder='Title' className='form-control'/>
              </div>
              <div className='mb-2'>
                <select className='form-control'  required="true" name="groupId" value={contact.groupId} onChange={updateInput}>
                  <option value="">Select a Group</option>
                </select>
              </div>
              <div className="mb-2">
                <input type="submit" value="Update" className='btn btn-primary' />
                <Link to={"/contactlist"} className="btn btn-dark ms-2">Cancel</Link>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className='contact-img' />
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Editcontact