import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import DeleteUser from "./components/DeleteUser";
import UpdateUser from "./components/UpdateUser";


let App = () => {
  
  return <>
              <Router>
                <Navbar/>
                <Routes>
                <Route path={"/users"} element={<Users/>} />
                <Route path={"/user/create"} element={<AddUser/>} />
                <Route path={" /user/:id"} element={<UpdateUser/>} />
                <Route path={"/user/:id"} element={<DeleteUser/>} />
                </Routes>
              </Router>
        </>
}

export default App;