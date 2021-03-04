let theme = ''
const output = document.querySelector('#output')
const main = document.querySelector('#main')

const createElements = function(num, type) {
    // Clear the output div
    output.innerHTML = ''

    // Create elements with loop
    for(let i = 0; i <= num-1; i++) {
        let el = document.createElement(type)
        el.textContent = 'Built-IT'
        output.appendChild(el)
    }
}

document.querySelector('#theme').addEventListener('change', function(e) {
    theme = e.target.value
    
    const child = output.childNodes
    document.querySelector('body').className = ''
    //output.className = ''
    if(theme != '') {
        document.querySelector('body').classList.add(theme)
        //output.classList.add(theme)
    }
})

document.querySelector('#build-elements').addEventListener('submit', function(e) {
    e.preventDefault()
    
    const elNum = parseInt(e.target.elements.elNum.value)
    const elType = e.target.elements.elType.value

    createElements(elNum, elType)

    e.target.elements.elNum.value = ''
    e.target.elements.elType.value = ''
})

document.querySelector('#clear').addEventListener('click', function(e) {
    e.preventDefault()
    // Clear the output div
    output.innerHTML = ''
})