import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Userlist from "./Components/Userlist";
import Adduser from "./Components/Adduser"
import Edituser from "./Components/Edituser";
import Userdetails from "./Components/Userdetails";


let App = () => {
  
  return <>
              <Router>
                
                <Routes>
                <Route path={"/"} element={<Navigate to={'/userlist'}/>} />
                <Route path={"/userlist"} element={<Userlist/>} />
                <Route path={"/user/create"} element={<Adduser/>} />
                <Route path={"/user/edit"} element={<Edituser/>} />
                <Route path={"/user/:id"} element={<Userdetails/>} />
                </Routes>
              </Router>
        </>
}

export default App;