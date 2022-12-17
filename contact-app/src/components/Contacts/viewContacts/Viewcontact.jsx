import React from 'react'
import {Link} from 'react-router-dom'

const Viewcontact = () => {
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
   <section className='view-contact mt-3'>
    <div className="container">
      <div className="row align-item-center">
        <div className="col-md-4">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className='contact-img' />
        </div>
        <div className="col-md-8">
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
                      <li className='list-group-item list-group-item-action'>
                          Company : <span className='fw-bold'>Youtube</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                          Title : <span className='fw-bold'>Youtuber</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                          Email : <span className='fw-bold'>Vidya@gmail.com</span>
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
    </>
   
  )
}

export default Viewcontact