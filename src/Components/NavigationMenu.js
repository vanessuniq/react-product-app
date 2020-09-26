import React from 'react';
import {Link} from "react-router-dom";


function NavigationMenu(props) {
    const menu = ['Home', 'About', 'Products'];
    const menuList = menu.map(item => (
        <li>
            <Link 
                to={item === 'Home'? "/" : `/${item}`} 
                className="text-blue-500 py-3 border-t border-b block"
            >
                    {item}
            </Link>
        </li>
    ))
    return (
        <div>
            <div className="font-bold py-3">Menu</div>
            <ul onClick={props.closeMenu}>
                {menuList}
            </ul>
        </div>
    )
};

export default NavigationMenu