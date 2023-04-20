const {app, BrowserWindow} = require('electron');
let mainWindow;

app.on('ready',()=>{
    mainWindow=new BrowserWindow({
        with:800,
        height:600,
    });
    mainWindow.loadFile('index.html')
})
