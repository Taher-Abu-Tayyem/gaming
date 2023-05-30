import React from 'react';
import './Navitem.css';

const Navitem = (props) => {
  return (
    <li className='nav-item'>{props.children}</li>
  )
}

const NavItemDropDown = (props) => {
    return (
      <li className='nav-item dropdown'>{props.children}</li>
    )
  }
export default Navitem
export {NavItemDropDown}