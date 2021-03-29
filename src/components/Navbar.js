import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaTenge } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton);



    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <FaTenge className="navbar-icon" />
                        TELZIR
                    </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Inicio
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                    Serviços
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                    Produtos
                            </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to="#" className="btn-link">
                                        <Button buttonStyle="btn--outline">Inscreva-se</Button>
                                    </Link>
                                ) : (
                                    <Link to="#" className="btn-link">
                                        <Button
                                            buttonStyle="btn--outline" buttonSize="btn--mobile" onClick={closeMobileMenu}>Inscreva-se</Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar