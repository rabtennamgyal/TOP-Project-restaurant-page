import './sass/main.scss'
import Navbar from './Components/Nav'
import Home from './Pages/Home'

function InitalizeSite() {
    const content = document.getElementById('content')
    content.appendChild(Navbar())
    content.appendChild(Home())

    return content
}

InitalizeSite()