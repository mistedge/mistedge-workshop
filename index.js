

const { app, BrowserWindow } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
let main
let newwin
var load = 0


function createWindow () {
 
  win = new BrowserWindow({
    width: 800,
    height: 400,
    maximizable: false,
    frame: false,
    icon: 'logo.jpg',
    movable: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('Splash.html')

  

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
}


app.on('ready', createWindow)

    createWindow.show = false;
    mainwindow.show = true;

  

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

function mainwindow(){
  main = new BrowserWindow({
  width: 800,
  height: 600,
  show: false,
  maximizable: false,
  autoHideMenuBar: true,
  icon: 'logo.jpg',
  webPreferences: {
    nodeIntegration: true,
    
  }
  })
  main.loadFile('Main.html')
  
  app.on('closed', () => {
    main = null
  })
 } app.on('ready', mainwindow)
 
var x = setInterval(function() {
load = load + 1
if (load === 10){
  
  main.show();
  win.close();
  

  
}
}, 1000);

