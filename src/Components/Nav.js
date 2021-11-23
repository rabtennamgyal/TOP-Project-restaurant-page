import Home from '../Pages/Home'
import Menu from '../Pages/Menu'
import About from '../Pages/About'

function Navbar() {
    const Nav = document.createElement('div')
    Nav.classList.add('navStyle')

    const divOne = document.createElement('div')
    divOne.classList.add('divOneStyle')

    // Creating buttons for pages
    const homeBtn = document.createElement('button')
    const menuBtn = document.createElement('button')
    const aboutBtn = document.createElement('button')

    homeBtn.classList.add('btnStyle')
    menuBtn.classList.add('btnStyle')
    aboutBtn.classList.add('btnStyle')

    homeBtn.textContent = 'Home'
    menuBtn.textContent = 'Menu'
    aboutBtn.textContent = 'About'

    homeBtn.addEventListener('click', () => {
        const content = document.getElementById('content')
        content.innerHTML = ''
        content.appendChild(Navbar())
        content.appendChild(Home())
    })

    menuBtn.addEventListener('click', () => {
        const content = document.getElementById('content')
        content.innerHTML = ''
        content.appendChild(Navbar())
        content.appendChild(Menu())
    })

    aboutBtn.addEventListener('click', () => {
        const content = document.getElementById('content')
        content.innerHTML = ''
        content.appendChild(Navbar())
        content.appendChild(About())
    })

    divOne.appendChild(homeBtn)
    divOne.appendChild(menuBtn)
    divOne.appendChild(aboutBtn)
    // 🎮

    const divTwo = document.createElement('div')
    divTwo.classList.add('divTwoStyle')
    
    const orderBtn = document.createElement('button')
    orderBtn.classList.add('orderStyle')
    orderBtn.textContent = 'Order Now'
    divTwo.appendChild(orderBtn)

    Nav.appendChild(divOne)
    Nav.appendChild(divTwo)

    return Nav
}

export default Navbar