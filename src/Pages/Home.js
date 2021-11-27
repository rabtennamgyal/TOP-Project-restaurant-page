import Naruto from '../Asset/img.png'
import Kakashi from '../Asset/up.png'

import narutoPic from '../Asset/narutoPic.jpg'
import chogiPic from '../Asset/chogiPic.jpeg'
import sakuraPic from '../Asset/sakuraPic.jpg'

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

    const picOne = document.createElement('div')
    const picTwo = document.createElement('div')
    const picThree = document.createElement('div')
    picOne.classList.add('picStyle')
    picTwo.classList.add('picStyle')
    picThree.classList.add('picStyle')

    const imgOne = new Image()
    imgOne.classList.add('imgStyle')
    imgOne.src = narutoPic

    const imgTwo = new Image()
    imgTwo.classList.add('imgStyle')
    imgTwo.src = chogiPic

    const imgThree = new Image()
    imgThree.classList.add('imgStyle')
    imgThree.src = sakuraPic

    picOne.appendChild(imgOne)
    picTwo.appendChild(imgTwo)
    picThree.appendChild(imgThree)

    const paraOne = document.createElement('div')
    paraOne.classList.add('paraStyle')

    const textOne = document.createElement('h1')
    textOne.classList.add('letterStyle')
    textOne.textContent = 'Naruto (Owner)'

    const contentOne = document.createElement('p')
    contentOne.classList.add('contentStyle')
    contentOne.textContent = 
    `
    Hello Shibonis!! This is your Hokage. Welcome to my restarant.
    Hello Shibonis!! This is your Hokage. Welcome to my restarant.
    `

    paraOne.appendChild(textOne)
    paraOne.appendChild(contentOne)

    cardOne.appendChild(picOne)
    cardTwo.appendChild(picTwo)
    cardThree.appendChild(picThree)
    cardOne.appendChild(paraOne)

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