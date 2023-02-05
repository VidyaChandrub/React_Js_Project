import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import DeleteUser from "./components/UserDetais";
import UpdateUser from "./components/UpdateUser";
import UserDetais from "./components/UserDetais";


let App = () => {
  
  return <>
              <Router>
                <Navbar/>
                <Routes>
                <Route path={"/"} element={<Navigate to={'/users'}/>} />
                <Route path={"/users"} element={<Users/>} />
                <Route path={"/user/create"} element={<AddUser/>} />
                <Route path={" /user/:id"} element={<UpdateUser/>} />
                <Route path={"/user/:id"} element={<UserDetais/>} />
                </Routes>
              </Router>
        </>
}

export default App;