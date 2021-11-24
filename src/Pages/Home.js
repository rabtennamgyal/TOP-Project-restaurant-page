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

    const para = document.createElement('p')
    para.classList.add('paraStyle')
    para.textContent = 
    `
    Hey Guys !! This is your boy Uzumaki. As you all might know, 
    every since I was a little kid I always wanted to be a Hokage.
    But when I became one I wasn't really fulfilled, something was missing. 
    Then I realized that owning a Ramen Shop was my dream all along.
    Don't get me wrong, I love being the Hokage but I love Ramen more.
    So guys do visit my Ramen Shop, if it's good enough for the Hokage
    it's good enough for you.
    `

    const img2 = new Image()
    img2.classList.add('kakashi')
    img2.src = Kakashi

    intro.appendChild(para)

    divTwo.appendChild(intro)
    divTwo.appendChild(img2)

    div.appendChild(divOne)
    div.appendChild(divTwo)

    return div
}

export default Home