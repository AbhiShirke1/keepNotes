import React from 'react'
import Main from './Main.css'
import Logo from '../Images/NotesLogo.png'

const Header = () => {
    return (
        <div className="top" style={{backgroundColor: "red"}}>
            <div className='header'>
                <img src={Logo} alt="logo" />
                <span style={{color: "white", marginLeft: "10px"}}>Notes</span>
            </div>


        </div>
    )
}

export default Header
