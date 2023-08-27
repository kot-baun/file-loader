// Теги
let input = window.document.querySelector('#input')
let output = window.document.querySelector('#output')
// Переменные
let isLastChar = false
// Функции
const clr = () => {
    input.innerText = '0'
    output.innerText = '0'
}
const calcInput = () => {
    input.innerText = output.innerText
}
const calcOutput = () => {
    output.innerText = eval(input.innerText)
}
const add = (value) => {
    if (input.innerText.length <= 10) {
        if (input.innerText === '0') {
            input.innerText = value
        } else {
            input.innerText += value
        }
    }
}
const addNum = (num) => {
    console.log('hello ' + num)

    add(num)
    isLastChar = false
    calcOutput()
}
const addChar = (char) => {
    if (!isLastChar) add(char)
    isLastChar = true
}
