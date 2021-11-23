import './sass/main.scss'
import Navbar from './Components/Nav'

function InitalizeSite() {
    const content = document.getElementById('content')
    content.appendChild(Navbar())

    return content
}

InitalizeSite()