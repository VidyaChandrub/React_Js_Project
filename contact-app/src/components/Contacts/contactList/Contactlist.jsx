import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactService } from '../../../services/ContactService';
import Spinner from '../../Spinner/Spinner';

const Contactlist = () => {

  let [state,setState] = useState(  {
    loading:false,
    contacts:[],
    errorMessage:''
  });

  useEffect(async () => {
    try {
        setState({...state,loading:true});
        let response = await ContactService.getAllContacts();
       /*  console.log(response.data) */
       setState({...state,
        loading:true,
        contacts:response.data})
    }
    catch(error){
        setState({...state,
        loading:false,
      errorMessage:error.message})
    }
  },[]);

  let {loading,contacts,errorMessage} = state;

  return (
    <>
    <pre>{JSON.stringify(contacts)}</pre>
      <section className='contact-search p-3'>
        <div className="container">
            <div className="grid">
              <div className="row">
                <div className="col">
                  <p className='h3 fw-bold'>Contact Manager <Link to={'/addcontact'} className="btn btn-primary ms-2">
                    <i className='fa fa-plus-circle me-2'/>New</Link></p>
                    <p className='fst-italic'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium earum ducimus tenetur, commodi placeat tempore impedit magnam laudantium sunt omnis facilis ad nobis eaque nostrum quod at hic. Eveniet, delectus.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <form className='row'>
                    <div className="col">
                      <div className="mb-2">
                         <input type="text" className='form-control' placeholder='Search Names' />
                      </div>
                    </div>
                    <div className="col">
                    <div className="mb-2">
                      <input type="submit" className='btn btn-outline-dark' value="Search" />
                    </div>
                    </div>
                    
                  </form>
                </div>
              </div>
          </div>
        </div>
      </section>
      {
        loading ? <><section className='contact-list'>
        <div className="container">
          <div className="row">
            {
              contacts.length > 0 && contacts.map((contact) => {
                return (<div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-4">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className='contact-img'  />
                    </div>
                    <div className="col-md-7">
                      <ul className='list-group'>
                        <li className='list-group-item list-group-item-action'>
                            Name : <span className='fw-bold'>Vidya</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                            Mobile : <span className='fw-bold'>8088285266</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                            Email : <span className='fw-bold'>Vidya@gmail.com</span>
                        </li>
                      </ul>
  
                    </div>
                    <div className="col-md-1 d-flex flex-column align-items-center">
                      <Link to={"/viewcontact/:contactID"} className='btn btn-warning my-1'><i className='fa fa-eye'/></Link>
                      <Link to={"/editcontact/:contactID"} className='btn btn-primary my-1'><i className='fa fa-pen'/></Link>
                      <Link  className='btn btn-danger my-1'><i className='fa fa-trash'/></Link>
                    </div>
                    </div>
                  </div>
                </div>
              </div>)
              })
            }
            
          </div>
        </div>

      </section></> : <Spinner/> 
      }
      
    </>
  );
}

export default Contactlist