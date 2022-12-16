import React from 'react'
import { Link } from 'react-router-dom';

const Contactlist = () => {
  return (
    <>
      <section className='contact-search p-3'>
        <div className="container">
            <div className="grid">
              <div className="row">
                <div className="col">
                  <p className='h3'>Contact Manager <Link to={'/addcontact'} className="btn btn-primary ms-2">
                    <i className='fa fa-plus-circle me-2'/>New</Link></p>
                    <p className='fst-italic'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium earum ducimus tenetur, commodi placeat tempore impedit magnam laudantium sunt omnis facilis ad nobis eaque nostrum quod at hic. Eveniet, delectus.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <form>
                    <div className="mb-2">
                      <input type="text" className='form-control' placeholder='Search Names..' />
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactlist