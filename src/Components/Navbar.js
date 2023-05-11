import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Navbar = () => {
  return (
    <nav className='navbar  navbar-dark  py-2 d-flex justify-content-center'>
           <Link to='/' className='navbar-brand ml-5'><marquee> <h1 className='heading'>Crud-Operations with React-Redux</h1> </marquee></Link>
    </nav>
  )
}

export default Navbar