import { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { CiLogin } from 'react-icons/ci'
import logo from '/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header>
        <nav>
            <a href="/"><img src={logo} alt="Rendezvous" /></a>

            <ul className="nav-links">
              <li><a href="/login"><CiLogin /></a></li>
              <li className="menu-icon" onClick={toggleMenu}>
                <BiMenuAltRight />
              </li>
            </ul>

            {isMenuOpen && (
              <ul className="hamburger-menu">
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            )}
        </nav>
    </header>
  )
}

export default Header