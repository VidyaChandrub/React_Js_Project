
import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './Header';
import AddContacts from './AddContacts';
import ContactList from './ContactList';

function App() {
  let LOCAL_STORAGE_KEY = "contacts"
  let [contacts, setContacts]=useState([]);
  
  const addContactHandler = (contact)=>{
    console.log(contact)
    setContacts([...contacts, contact]) 
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])
  return (
    
    <div className='ui container'>
      <Header />
      <AddContacts addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
