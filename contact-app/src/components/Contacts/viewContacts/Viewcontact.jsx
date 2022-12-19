import React from 'react'
import { useEffect,useState } from 'react';
import {Link, useParams} from 'react-router-dom'
import { ContactService } from '../../../services/ContactService';
import Spinner from '../../Spinner/Spinner';

const Viewcontact = () => {

  let {contactID} = useParams();

  let [state,setState]=useState({
    loading:false,
    contact:[],
    errorMessage:''
  });

  useEffect(async ()=>{
    try {
      let response = await ContactService.getContacts(contactID);
      let groupresponse = await ContactService.getGroup(response.data);
      /* console.log(response.data) */
      setState({...state,
        loading:false,
        contact:response.data,
        group: groupresponse.data}
    )
    }
    catch(error){
      setState({...state,
        loading:false,
      errorMessage:error.message})
    }
  },[contactID]);

  let {loading,contact,errorMessage,group} = state;
  return (
    <>
    <section className='view-contact-intro p-3'>
    
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3 text-warning fw-bold">View Contact</p>
            <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis similique ex est cum quod illo itaque non rerum beatae? Quia, itaque aut? Eligendi iusto illum, totam quod ullam optio quam?</p>
          </div>
        </div>
      </div>
   </section>
   {
    loading ? <Spinner/> : <> {
      Object.keys(contact).length > 0 && Object.keys(group).length > 0 &&
      <section className='view-contact mt-3'>
    <div className="container">
      <div className="row align-item-center">
        <div className="col-md-4">
          <img src={contact.photo} className='contact-img' />
        </div>
        <div className="col-md-8">
        <ul className='list-group'>
                      <li className='list-group-item list-group-item-action'>
                          Name : <span className='fw-bold'>{contact.name}</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                          Mobile : <span className='fw-bold'>{contact.mobile}</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                          Email : <span className='fw-bold'>{contact.email}</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                          Company : <span className='fw-bold'>{contact.company}</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                          Title : <span className='fw-bold'>{contact.title}</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                          Group : <span className='fw-bold'>{group.name}</span>
                      </li>
                    </ul>

        </div>
      </div>
      <div className="row">
        <div className="col">
        <Link to={"/contactlist" } className="btn btn-warning">Back</Link>
        </div>
        
      </div>
    </div>

   </section>
    }
     </>
   }
   
    </>
   
  )
}

export default Viewcontact