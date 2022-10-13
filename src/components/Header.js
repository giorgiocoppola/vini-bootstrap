import React from 'react'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <nav class="navbar bg-danger">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1 text-light fs-2">Cantina Sociale Bordeaux</span>

      <button type="button" class="btn btn-dark fs-4"><Link className='text-decoration-none text-light' to='/accedi'>Accedi</Link></button>
    </div>
  </nav>
        


  )
}

export default Header


