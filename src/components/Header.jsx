import { BiMenuAltRight } from 'react-icons/bi'
import { CiLogin } from 'react-icons/ci'
import logo from '/logo.png'

const Header = () => {
  return (
    <header>
        <nav>
            <a href="/"><img src={logo} alt="Rendezvous" /></a>

            <ul>
                <li><a href="/login"><CiLogin /></a></li>
                <li><BiMenuAltRight /></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header