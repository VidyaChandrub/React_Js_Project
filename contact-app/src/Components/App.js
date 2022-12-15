
import './App.css';
import React from 'react';
import Header from './Header';
import AddContacts from './AddContacts';
import ContactList from './ContactList';

function App() {
  const contacts = [
    {
      id:"1",
      "name":"vidya",
      "email":"VidhyaC651@gmail.com"
    },
    {
      id:"2",
      "name":"prasanna",
      "email":"Prasanna@gmail.com"
    }
  ];
  return (
    
    <div className='ui container'>
      <Header />
      <AddContacts />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
