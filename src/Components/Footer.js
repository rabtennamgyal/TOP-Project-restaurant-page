import Kakashi from '../Asset/up.png'

function Footer() {
    const footer = document.createElement('div')
    footer.classList.add('footerStyle')

    const footerOne = document.createElement('div')
    footerOne.classList.add('f1Style')

    const header = document.createElement('h1')
    header.classList.add('headerStyle')
    header.textContent = 'Follow us on Social Media'

    footerOne.appendChild(header)

    const footerTwo = document.createElement('div')
    footerTwo.classList.add('f2Style')

    const one = document.createElement('h1')
    one.classList.add('imgStyle')
    one.innerHTML = '<i class="fab fa-instagram"></i>'

    const two = document.createElement('h1')
    two.classList.add('imgStyle')
    two.innerHTML = '<i class="fab fa-twitter"></i>'

    const three = document.createElement('h1')
    three.classList.add('imgStyle')
    three.innerHTML = '<i class="fab fa-github"></i>'

    const link = document.createElement('a')
    link.href = 'https://github.com/rabtennamgyal/TOP-Project-restaurant-page'
    link.target = '_blank'

    const img2 = new Image()
    img2.classList.add('kakashi')
    img2.src = Kakashi

    link.appendChild(three)

    footerTwo.appendChild(one)
    footerTwo.appendChild(two)
    footerTwo.appendChild(link)
    footerTwo.appendChild(img2)

    footer.appendChild(footerOne)
    footer.appendChild(footerTwo)

    return footer
}

export default Footer