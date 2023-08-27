// const fs = require('fs')

// let config = '../../../config.json'

let output = window.document.querySelector('#output')

const addNum = (num) => {
    // console.log('hello ' + num)
    output.innerText = output.innerText + 'hello '
}

const loadingHandler = () => {
    output.innerText = output.innerText + 'loaded '
}
