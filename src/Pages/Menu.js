import One from '../Asset/one.jpg'
import Two from '../Asset/two.jpg'
import Three from '../Asset/three.jpg'
import Four from '../Asset/four.jpg'
import Five from '../Asset/five.jpg'


function Menu() {
    const div = document.createElement('div')
    div.classList.add('menuStyle')

    const divOne = document.createElement('div')
    divOne.classList.add('divStyle')
    const imgDiv1 = document.createElement('div')
    imgDiv1.classList.add('imgStyle')
    const one = new Image()
    one.classList.add('ramen')
    one.src = One
    imgDiv1.appendChild(one)
    divOne.appendChild(imgDiv1)

    const divTwo = document.createElement('div')
    divTwo.classList.add('divStyle')
    const imgDiv2 = document.createElement('div')
    imgDiv2.classList.add('imgStyle')
    const two = new Image()
    two.classList.add('ramen')
    two.src = Two
    imgDiv2.appendChild(two)
    divTwo.appendChild(imgDiv2)

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

    // const divSix = document.createElement('div')
    // divSix.classList.add('divStyle')
    // const imgDiv6 = document.createElement('div')
    // imgDiv5.classList.add('imgStyle')
    // const six = new Image()
    // six.classList.add('ramen')
    // six.src = Six 
    // imgDiv6.appendChild(six)
    // divSix.appendChild(imgDiv6)

    div.appendChild(divOne)
    div.appendChild(divTwo)
    div.appendChild(divThree)
    div.appendChild(divFour)
    div.appendChild(divFive)
    //iv.appendChild(divSix)

    return div
}

export default Menu