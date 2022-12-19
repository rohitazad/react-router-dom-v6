import React from 'react';
import {Link} from 'react-router-dom';
const HeaderComponents = ()=>{
    return (
        <ul className='listNavbar'>
            <li>
                <Link to="/">Home </Link>
            </li>
            <li>
                <Link to="/about">ABout </Link>
            </li>
            <li>
                <Link to="/contact">Contact </Link>
            </li>
        </ul>
    )
}

export default HeaderComponents;