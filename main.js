const {app, BrowserWindow} = require('electron')
const path = require('path');

// Specify flash path, supposing it is placed in the same directory with main.js.
let pluginDir = app.getAppPath() + '/plugins/win/'+process.arch;
let pluginName;


switch (process.platform) {
    case 'win32':
        pluginName = 'pepflashplayer.dll';
        break
    case 'darwin':
        pluginName = 'PepperFlashPlayer.plugin';
        break
    case 'linux':
        pluginName = 'libpepflashplayer.so';
        break

}

console.log(path.join(pluginDir, pluginName));
console.log(__dirname + '/icon.ico');
console.log(app.getAppPath());

app.commandLine.appendSwitch('ppapi-flash-path', path.join(pluginDir, pluginName))

// Optional: Specify flash version, for example, v17.0.0.169
app.commandLine.appendSwitch("ppapi-flash-version", "30.0.0.127");


app.on('ready', () => {
    let win = new BrowserWindow({
        width: 1500,
        height: 800,
        icon: __dirname + '/icon.ico',
        webPreferences: {
            plugins: true,
        },
    })
    win.loadURL(`https://agium.com/index.php?page=game`);
    //win.webContents.openDevTools();
    win.removeMenu();
    // Something else
})

