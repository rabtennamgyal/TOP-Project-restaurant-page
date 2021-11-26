import Naruto from '../Asset/img.png'
import Kakashi from '../Asset/up.png'

function Home() {
    const div = document.createElement('div')
    div.classList.add('homeStyle')

    // Div One of the page
    const divOne = document.createElement('div')
    divOne.classList.add('divOneStyle')
    
    const header = document.createElement('h1')
    header.classList.add('h1Style')
    header.textContent = "Naruto's Ramen Shop"

    const img = new Image()
    img.classList.add('naruto')
    img.src = Naruto

    divOne.appendChild(img)
    divOne.appendChild(header)

    // Div Two of the page
    const divTwo = document.createElement('div')
    divTwo.classList.add('divTwoStyle')

    const intro = document.createElement('div')
    intro.classList.add('introStyle')

    const introOne = document.createElement('div')
    introOne.classList.add('introOneStyle')
    const h1 = document.createElement('h1')
    h1.classList.add('h1Style')
    h1.textContent = 'Meet our Staffs'

    const introTwo = document.createElement('div')
    introTwo.classList.add('introTwoStyle')

    const cardOne = document.createElement('div')
    const cardTwo = document.createElement('div')
    const cardThree = document.createElement('div')
    cardOne.classList.add('cardStyle')
    cardTwo.classList.add('cardStyle')
    cardThree.classList.add('cardStyle')
    introTwo.appendChild(cardOne)
    introTwo.appendChild(cardTwo)
    introTwo.appendChild(cardThree)

    introOne.appendChild(h1)
    intro.appendChild(introOne)
    intro.appendChild(introTwo)

    const img2 = new Image()
    img2.classList.add('kakashi')
    img2.src = Kakashi

    divTwo.appendChild(intro)
    divTwo.appendChild(img2)

    div.appendChild(divOne)
    div.appendChild(divTwo)

    return div
}

export default Home