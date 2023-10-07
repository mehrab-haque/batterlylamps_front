import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Header=props=>{
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
        </div>
    )
}

export default Header