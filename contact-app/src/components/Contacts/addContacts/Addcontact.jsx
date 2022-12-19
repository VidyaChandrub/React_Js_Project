import React from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"

const Addcontact = () => {

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
  return (
    <>
    <section className='add-contact p-3'>
      <pre>
      {JSON.stringify(state.contact)}
      </pre>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h4 text-success fw-bold">Create Contact</p>
            <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium in voluptas! Fugiat impedit accusamus culpa, nulla error earum obcaecati, necessitatibus laborum vitae nihil deserunt dolorum a accusantium exercitationem voluptate.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <form >
              <div className="mb-2">
                <input type="text" placeholder='Name' className='form-control' />
              </div>
              <div className="mb-2">
                <input type="text" placeholder='Photo url' className='form-control' />
              </div>
              <div className="mb-2">
                <input type="number" placeholder='Mobile' className='form-control'/>
              </div>
              <div className="mb-2">
                <input type="email" placeholder='Email' className='form-control'/>
              </div>
              <div className="mb-2">
                <input type="text" placeholder='Company' className='form-control'/>
              </div>
              <div className="mb-2">
                <input type="text" placeholder='Title' className='form-control'/>
              </div>
              <div className='mb-2'>
                <select className='form-control'>
                  <option value="">Select a Group</option>
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