import React from 'react'
import user from '../images/user.webp'

const ContactCard = (props) => {

    const {id, name, email} = props.contact
  return (
    <div className='item'>
        <img src={user} alt="image2" height="25px" weight="25px"/>
                    <div className='content'>
                        <div className="header">{name}</div>
                        <div>{email}</div>
                        
                    </div>
                    <i className='trash alternate outline icon' style={{color:"red", marginTop:"7px"}}></i>
        </div>)
  
}

export default ContactCard