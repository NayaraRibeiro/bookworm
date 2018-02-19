import React from 'react'
import { NavLink } from 'react-router-dom'


const HeaderLink = ({ address, children }) => (
    <NavLink to={`/${ address }`}> {children} </NavLink>
);

export default HeaderLink;