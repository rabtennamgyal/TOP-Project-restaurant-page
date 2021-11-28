import Shop from '../Asset/shop.jpg'

function About() {
    const div = document.createElement('div')
    div.classList.add('aboutStyle')

    const background = document.createElement('div')
    background.classList.add('backStyle')

    const img = new Image()
    img.classList.add('backingStyle')
    img.src = Shop

    background.appendChild(img)

    const frontground = document.createElement('div')
    frontground.classList.add('frontStyle')

    const content = document.createElement('div')
    content.classList.add('contentStyle')

    const h1 = document.createElement('h1')
    h1.classList.add('h1Style')
    h1.textContent = 'Location:'

    const text = document.createElement('p')
    text.classList.add('pStyle')
    text.textContent = "11-23 45 Ave, 12300, Leaf Village, Land Of Fire."

    const number = document.createElement('p')
    number.classList.add('pStyle')
    number.textContent = '322-232-1232 📞'

    content.appendChild(h1)
    content.appendChild(text)
    content.appendChild(number)
    frontground.appendChild(content)

    div.appendChild(background)
    div.appendChild(frontground)

    return div
}

export default About