import {app, BrowserWindow, Menu} from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`


function createWindow() {
    // 增加菜单，支持复制粘贴
    const template = [{
        label: "关于",
        submenu: [
            {label: "关于", selector: "orderFrontStandardAboutPanel:"},
            {type: "separator"},
            {
                label: "退出", accelerator: "Command+Q", click: function () {
                    app.quit();
                }
            }
        ]
    }, {
        label: "编辑",
        submenu: [
            {label: "取消", accelerator: "CmdOrCtrl+Z", selector: "undo:"},
            {label: "重做", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:"},
            {type: "separator"},
            {label: "剪切", accelerator: "CmdOrCtrl+X", selector: "cut:"},
            {label: "复制", accelerator: "CmdOrCtrl+C", selector: "copy:"},
            {label: "粘贴", accelerator: "CmdOrCtrl+V", selector: "paste:"},
            {label: "全选", accelerator: "CmdOrCtrl+A", selector: "selectAll:"}
        ]
    }
    ];

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
        height: 800,
        useContentSize: true,
        width: 1200
    })

    mainWindow.loadURL(winURL)

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
