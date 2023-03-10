
import "./App.css";
import React, { useState } from "react";
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import Viewdata from "./Viewdata";


function App() {
  const [users, setUsers] = useState(JsonData.slice(0, 50)); //JsonData.slice(0, 50)
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="user">
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
           <a href="/viewdata" ><button  className={"paginationActive"}><Viewdata/></button></a>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      {displayUsers}
      
      <ReactPaginate
        previousLabel= {<img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Less_than_symbol.jpg" height="10px" width="10px"/>}
        nextLabel={<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7iRlbHfDpBKdThku5oPbyKbvMpFUaX4FdkuWTWnZjtjlWuUGSbXuMgMSpQfsVKQnrEY&usqp=CAU" height="15px" width="10px"/>}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default App;