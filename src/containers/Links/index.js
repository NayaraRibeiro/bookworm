import React from 'react'
import { NavLink } from 'react-router-dom'


const HeaderLink = ({ address, children }) => (
    <NavLink
        to={`/${ address }`}
        activeStyle={ {
            textDecoration: 'none',
            color: 'black'
        }}
    >
        {children}
    </NavLink>
)

export default HeaderLink;