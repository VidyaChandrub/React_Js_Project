import React from 'react';
import { useState } from 'react';

const AddUser = () => {

    let [state, setState] = useState({
        user : {
            _id : '',
            firstName:'',
            lastName:'',
            age:'',
            phoneNumber:''
        }
    })
  return (
    <div>AddUser</div>
  )
}

export default AddUser