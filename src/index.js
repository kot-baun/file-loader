const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const fs = require('fs')

let config = './src/config.json'

const loadConfig = () => {
    console.log('loadConfig')
    try {
        fs.readFile(config, (err, data) => {
            if (err) {
                console.log('no file')
            }

            if (data) {
                console.log(JSON.parse(data))
            }
        })

        // return JSON.parse(configFile);
    } catch (error) {
        console.error('Error loading config:', error)
        return {} // Если файл не существует или возникла ошибка, вернуть пустой объект
    }
}

const createWindow = () => {
    console.log(app.getPath('userData'))
    const win = new BrowserWindow({
        width: 300,
        height: 500,
        icon: path.join(__dirname, './calculator/icon.png'),
        resizable: false,
    })
    win.setMenuBarVisibility(false)
    win.setTitle('Калькулятор')
    // win.loadFile('src/index.html');
    win.loadURL(
        url.format({
            pathname: path.join(__dirname, './calculator/calculator.html'),
            protocol: 'file:',
            slashes: true,
        })
    )
}

function createSplashWindow() {
    console.log('create sclash')
    const splash = new BrowserWindow({
        width: 1200,
        height: 800,
        resizable: false,
        frame: false,
        resizable: false,
        maximizable: false,
        titleBarStyle: 'hidden',

        // frameless
    })
    splash.setMenuBarVisibility(false)
    // splash.loadFile('./src/god/screens/00_splash/splash.html')
    splash.loadURL(
        url.format({
            pathname: path.join(__dirname, './god/screens/00_splash/splash.html'),
            protocol: 'file:',
            slashes: true,
        })
    )



}

app.whenReady().then(() => {
    loadConfig()
    createSplashWindow()
    // createWindow()
})
app.on('window-all-closed', () => app.quit())
//tttttt
