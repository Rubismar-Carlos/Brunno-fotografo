import './Navbar.css'

import { Link, NavLink } from 'react-router-dom'

import { FiMenu } from 'react-icons/fi'

import imgLogo from '../../imagem/Brunno-Carvalho.png'

import { useRef, useState } from 'react'



const Navbar = () => {

    const dropDownRef = useRef(null)

    const [isActive, setIsActive] = useState(false)

    console.log(isActive)

    const handleMenu = () => setIsActive(!isActive)
    
    const closeMenu = () => {
        setTimeout(() => {
            setIsActive(false)
        }, [500])
    }
  return (
    <div>
    <nav>
        <div className="img-logo">
            <Link to="/">
                <img src={imgLogo} alt="Imagem logo" />
            </Link>
        </div>
        <ul className='menu-desktop'>
            <li>
                <NavLink to="/servicos">
                    Serviços
                </NavLink>
            </li>
            <li>
                <NavLink to="/orcamentos">
                    Orçamentos
                </NavLink>
            </li>
            <li>
                <NavLink to="/about">
                    Sobre
                </NavLink>
            </li>
        </ul>
        <div className='btn-menu'>
            <FiMenu onClick={handleMenu}/>
        </div>
        
    </nav>
        <div ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"} .hide`}>
            <ul>
        <li>
                <NavLink to="/servicos" onClick={closeMenu}>
                    Serviços
                </NavLink>
            </li>
            <li>
                <NavLink to="/orcamentos" onClick={closeMenu}>
                    Orçamentos
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" onClick={closeMenu}>
                    Sobre
                </NavLink>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar