import { BsInstagram } from 'react-icons/bs'

import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <p>Brunno Carvalho Fotografias &copy;</p>
        <div>
            <Link to="https://www.instagram.com/brunnocarvalhophoto/" target="_blank">
                < BsInstagram />
            </Link>
        </div>
    </footer>
  )
}

export default Footer