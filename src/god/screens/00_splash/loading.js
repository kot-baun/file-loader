const fs = require('fs')
const { app } = require('electron')

let config = '../../../config.json'

console.log('loadConfig in loading')

app.whenReady().then(() => {
    console.log('loading app point 1')

})

try {
    console.log('loading point 1')
} catch (error) {
    console.error('Error loading config:', error)
    return {} // Если файл не существует или возникла ошибка, вернуть пустой объект
}
