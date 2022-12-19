import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import { ContactService } from '../../../services/ContactService';

const Addcontact = () => {

  let navigate = useNavigate();
  let [state,setState] = useState({
    loading : false,
    contact : {
      name:'',
      photo:'',
      mobile:'',
      email:'',
      company:'',
      title:'',
      groupId:''
    },
    groups:[],
    errorMessage:''
  });

  let updateInput = (event) => {
    setState( {
      ...state , 
      contact :{
        ...state.contact,
        [event.target.name] : event.target.value
      }
    });
  }
  
  let submitInput = async (event) => {
      event.preventDefault();
      try{
        let response = await ContactService.createContact(state.contact);
        if(response){
            navigate('/contactlist',{replace : true})
        }
      }
      catch(error){
        setState({...state,errorMessage: error.message});
        navigate('/contactadd',{replace : false})
      }

  }
  useEffect( async () => {
    try{
      setState({...state,
        loading:true})
      let response =  await ContactService.getGroups();
      setState({...state,loading:false,groups:response.data})
    }
    catch(error){

    }
    
  }, []);

  let {loading,contact,groups,errorMessage} = state;
  return (
    <>
    <section className='add-contact p-3'>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h4 text-success fw-bold">Create Contact</p>
            <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium in voluptas! Fugiat impedit accusamus culpa, nulla error earum obcaecati, necessitatibus laborum vitae nihil deserunt dolorum a accusantium exercitationem voluptate.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={submitInput}>
              <div className="mb-2">
                <input type="text" placeholder='Name' className='form-control' name="name" value={contact.name} onChange={updateInput}/>
              </div>
              <div className="mb-2">
                <input type="text" placeholder='Photo url' className='form-control' name="photo" value={contact.photo} onChange={updateInput}/>
              </div>
              <div className="mb-2">
                <input type="number" placeholder='Mobile' className='form-control' name="mobile" value={contact.mobile} onChange={updateInput}/>
              </div>
              <div className="mb-2">
                <input type="email" placeholder='Email' className='form-control' name="email" value={contact.email} onChange={updateInput}/>
              </div>
              <div className="mb-2">
                <input type="text" placeholder='Company' className='form-control' name="company" value={contact.company} onChange={updateInput}/>
              </div>
              <div className="mb-2">
                <input type="text" placeholder='Title' className='form-control' name="title" value={contact.title} onChange={updateInput}/>
              </div>
              <div className='mb-2'>
                <select className='form-control' name="groupId" value={contact.groupId} onChange={updateInput}>
                  <option value="">Select a Group</option>
                  {
                    groups.length > 0 && groups.map ( (group) => {
                      return (
                        <option key={group.id} value={group.id}>{group.name}</option>
                      )
                    })
                  }
                </select>
              </div>

              <div className="mb-2">
                <input type="submit" value="Create" className='btn btn-success' />
                <Link to={"/contactlist"} className="btn btn-dark ms-2">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Addcontact