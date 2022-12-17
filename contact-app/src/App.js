import React from 'react';
import './index.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Contactlist from './components/Contacts/contactList/Contactlist'
import Addcontact from  './components/Contacts/addContacts/Addcontact'
import Viewcontact from  './components/Contacts/viewContacts/Viewcontact'
import Editcontact from  './components/Contacts/editContacts/Editcontact'

let App = () => {

  
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Navigate to={'/contactlist'}/>}/>
        <Route path={"/contactlist"} element={<Contactlist/>} />
        <Route path={"/addcontact"} element={<Addcontact/>} />
        <Route path={"/viewcontact/:contactID"} element={<Viewcontact/>} />
        <Route path={"/editcontact/:contactID"} element={<Editcontact/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
