import React from 'react'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <nav className="navbar navbar-danger bg-danger">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1 text-light fs-2"><Link className="text-light text-decoration-none" to='/'>Cantina Sociale Bordeaux</Link></span>

      <button type="button" className="btn btn-dark fs-4"><Link className='text-decoration-none text-light' to='/accedi'>Accedi</Link></button>
    </div>
  </nav>
        


  )
}

export default Header


