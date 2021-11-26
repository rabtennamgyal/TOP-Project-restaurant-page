import One from '../Asset/one.jpg'
import Two from '../Asset/two.jpg'
import Three from '../Asset/three.jpg'
import Four from '../Asset/four.jpg'
import Five from '../Asset/five.jpg'
import Six from '../Asset/six.jpg'


function Menu() {
    const div = document.createElement('div')
    div.classList.add('menuStyle')

    // 🍜 Ramen Card One start here.
    const divOne = document.createElement('div')
    divOne.classList.add('divStyle')
    const imgDiv1 = document.createElement('div')
    imgDiv1.classList.add('imgStyle')
    const one = new Image()
    one.classList.add('ramen')
    one.src = One
    imgDiv1.appendChild(one)

    const textDiv1 = document.createElement('div')
    textDiv1.classList.add('textStyle')
    const h1 = document.createElement('h1')
    h1.classList.add('h1Style')
    h1.textContent = 'Super Special Ramen'
    const desc1 = document.createElement('p')
    desc1.classList.add('pstyle')
    desc1.textContent = 
    `
    Ingredients: 'Noodle', 'Pork', 'Leaves', 'Sharingen', 'Rasengen', 'Soup'
    `
    const price1 = document.createElement('p')
    price1.classList.add('pstyle')
    price1.textContent = 'Price: $14.99'

    textDiv1.appendChild(h1)
    textDiv1.appendChild(desc1)
    textDiv1.appendChild(price1)

    divOne.appendChild(imgDiv1)
    divOne.appendChild(textDiv1)
    // 🍜 Ramen Card One ends here.

    // 🍜 Ramen Card two start here.
    const divTwo = document.createElement('div')
    divTwo.classList.add('divStyle')
    const imgDiv2 = document.createElement('div')
    imgDiv2.classList.add('imgStyle')
    const two = new Image()
    two.classList.add('ramen')
    two.src = Two
    imgDiv2.appendChild(two)

    const textDiv2 = document.createElement('div')
    textDiv2.classList.add('textStyle')
    const h2 = document.createElement('h1')
    h2.classList.add('h1Style')
    h2.textContent = 'Ultimate Hokage Ramen'
    const desc2 = document.createElement('p')
    desc2.classList.add('pstyle')
    desc2.textContent = 
    `
    Ingredients: 'Noodle', 'Pork', 'Leaves', 'Sharingen', 'Rasengen', 'Soup'
    `
    const price2 = document.createElement('p')
    price2.classList.add('pstyle')
    price2.textContent = 'Price: $17.99'
    

    textDiv2.appendChild(h2)
    textDiv2.appendChild(desc2)
    textDiv2.appendChild(price2)

    divTwo.appendChild(imgDiv2)
    divTwo.appendChild(textDiv2)
    // 🍜 Ramen Card Two ends here.

    
    const divThree = document.createElement('div')
    divThree.classList.add('divStyle')
    const imgDiv3 = document.createElement('div')
    imgDiv3.classList.add('imgStyle')
    const three = new Image()
    three.classList.add('ramen')
    three.src = Three
    imgDiv3.appendChild(three)
    divThree.appendChild(imgDiv3)

    const divFour = document.createElement('div')
    divFour.classList.add('divStyle')
    const imgDiv4 = document.createElement('div')
    imgDiv4.classList.add('imgStyle')
    const four = new Image()
    four.classList.add('ramen')
    four.src = Four 
    imgDiv4.appendChild(four)
    divFour.appendChild(imgDiv4)

    const divFive = document.createElement('div')
    divFive.classList.add('divStyle')
    const imgDiv5 = document.createElement('div')
    imgDiv5.classList.add('imgStyle')
    const five = new Image()
    five.classList.add('ramen')
    five.src = Five 
    imgDiv5.appendChild(five)
    divFive.appendChild(imgDiv5)

    const divSix = document.createElement('div')
    divSix.classList.add('divStyle')
    const imgDiv6 = document.createElement('div')
    imgDiv6.classList.add('imgStyle')
    const six = new Image()
    six.classList.add('ramen')
    six.src = Six 
    imgDiv6.appendChild(six)
    divSix.appendChild(imgDiv6)

    div.appendChild(divOne)
    div.appendChild(divTwo)
    div.appendChild(divThree)
    div.appendChild(divFour)
    div.appendChild(divFive)
    div.appendChild(divSix)

    return div
}

export default Menu