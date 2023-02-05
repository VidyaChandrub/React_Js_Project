import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <Fragment>
       <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
        <h1>Dashboard</h1>
        </Link>
        </nav>
    </Fragment>
  )
}

export default Navbar