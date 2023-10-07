import React from 'react'
import logo from '../assets/logo.svg'

const Header=props=>{
    return(
        <div className='header-container'>
            <div className='header-logo-container'>
                <img src={logo}/>
            </div>
            <div className='header-menu-container'>
                <div className='header-menu-item'>
                    HOME
                </div>
                <div className='header-menu-item'>
                    PRODUCTS
                </div>
                <div className='header-menu-item'>
                    COMPANY
                </div>
                <div className='header-menu-item'>
                    FACILITY
                </div>
                <div className='header-menu-item'>
                    OUR ADDRESS
                </div>
            </div>
            <div className='header-button-container'>
                <button>
                    CONTACT US
                </button>
            </div>
        </div>
    )
}

export default Header