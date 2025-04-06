import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  // 브라우저 창 생성
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // 애플리케이션의 index.html 로드
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // 개발 환경에서만 개발자 도구 열기
  // process.env.NODE_ENV가 'production'이면 개발자 도구를 열지 않음
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  // 창이 닫힐 때 이벤트
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Electron이 초기화를 완료하고 창을 생성할 준비가 되면 호출
app.on('ready', createWindow);

// 모든 창이 닫히면 애플리케이션 종료
app.on('window-all-closed', () => {
  // macOS에서는 사용자가 Cmd + Q로 명시적으로 종료하기 전까지는
  // 애플리케이션이 활성 상태로 유지되는 것이 일반적
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // macOS에서는 dock 아이콘을 클릭하고 다른 창이 열려있지 않으면
  // 앱에서 새 창을 다시 여는 것이 일반적
  if (mainWindow === null) {
    createWindow();
  }
});
