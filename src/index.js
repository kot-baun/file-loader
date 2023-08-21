const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url')
const fs = require('fs')


let config = './src/config.json'

const loadConfig = () => {
  try {
    if (fs.existsSync(config)) {

      const configFile = fs.readFileSync(config, 'utf-8');
      console.log(JSON.parse(configFile));
      // return JSON.parse(configFile);
    } else {
      console.log('no file');
    }

  } catch (error) {
    console.error('Error loading config:', error);
    return {}; // Если файл не существует или возникла ошибка, вернуть пустой объект
  }
}

const createWindow = () => {
  console.log(app.getPath('userData'));
  const win = new BrowserWindow({
    width: 300,
    height: 500,
    icon: path.join(__dirname, './calculator/icon.png'),
    resizable: false
  });
  win.setMenuBarVisibility(false);
  win.setTitle('Калькулятор');
  // win.loadFile('src/index.html');
  win.loadURL(url.format({
    pathname: path.join(__dirname, './calculator/calculator.html'),
    protocol: 'file:',
    slashes: true
  }))
}






app.whenReady().then(() => {
  loadConfig();
  createWindow();
});
app.on('window-all-closed', () => app.quit());
//tttttt