import React from 'react'
import { NavLink,Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
       <Link to='/'> <h2 className='title'>#Fatuma store</h2></Link> 
        <nav>
            <NavLink className='header-page-links'to='/host'>Host</NavLink>
            <NavLink className='header-page-links'to='/about'>About</NavLink>
            <NavLink className='header-page-links'to='/items'>Items</NavLink>
        </nav>
    </div>
  )
}

export default Header