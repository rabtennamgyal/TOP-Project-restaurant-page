import './sass/main.scss'
import Navbar from './Components/Nav'
import Home from './Pages/Home'
import Footer from './Components/Footer'

function InitalizeSite() {
    const content = document.getElementById('content')
    content.appendChild(Navbar())
    content.appendChild(Home())
    content.appendChild(Footer())

    return content
}

export default InitalizeSite