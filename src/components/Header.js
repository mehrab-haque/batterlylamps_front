import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import burger from '../assets/menu.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header=props=>{


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <div className='header-container'>
            <div className='header-logo-container'>
                <img src={logo}/>
            </div>
            <div className='header-menu-container'>
                <div className='header-menu-item'>
                    <Link to='/'>HOME</Link>
                </div>
                <div className='header-menu-item'>
                    <Link to='/products'>PRODUCTS</Link>
                </div>
                <div className='header-menu-item'>
                    <Link to='/company'>COMPANY</Link>
                </div>
                <div className='header-menu-item'>
                    <Link to='/facility'>FACILITY</Link>
                </div>
                <div className='header-menu-item'>
                   <Link to='/contact'>OUR ADDRESS</Link>
                </div>
            </div>
            <div className='header-button-container'>
                <button>
                    <Link to='/contact'>CONTACT US</Link>
                </button>
            </div>
            <div className='header-burger-container'>
                <img src={burger} onClick={handleClick}/>
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><Link to='/'>HOME</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/products'>PRODUCTS</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/company'>COMPANY</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/facility'>FACILITY</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/contact'>CONTACT US</Link></MenuItem>
            </Menu>

        </div>
    )
}

export default Header