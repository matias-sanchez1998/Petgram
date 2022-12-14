import React from 'react';
import { Nav, Link } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '32px';

function NavBar(props) {
    return (
        <Nav>
            <Link exact to='/'><MdHome size={SIZE}/></Link>
            <Link exact to='/favs'><MdFavoriteBorder size={SIZE}/></Link>
            <Link exact to='/user'><MdPersonOutline  size={SIZE}/></Link>
        </Nav>
    );
}

export default NavBar;