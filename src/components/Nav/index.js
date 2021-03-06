import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {    
    return (
        <nav>
            <div>
                <NavLink to="/about" activeClassName="is-active" activeStyle={{color: "purple"}}>
                    About Me
                </NavLink>
                <NavLink to="/portfolio" activeClassName="is-active" activeStyle={{color: "purple"}}>
                    Portfolio
                </NavLink>
                <NavLink to="/contact" activeClassName="is-active" activeStyle={{color: "purple"}}>
                    Contact
                </NavLink>
                <NavLink to="/resume" activeClassName="is-active" activeStyle={{color: "purple"}}>
                    Resume               
                </NavLink>
            </div>
        </nav>
    );
}

export default Nav;