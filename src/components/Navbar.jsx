import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
    <h1>Math Magicians</h1>
    <ul className='nav-list'>
      <li><Link to='/'>Home</Link></li>
      <li>|</li>
      <li><Link to='/Calculator'>Calculator</Link></li>
      <li>|</li>
      <li><Link to='/Quote'>Quote</Link></li>
    </ul>
    </div> 
  )
}

export default Navbar