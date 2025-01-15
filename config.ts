import publicKey from './public.pem?raw';

export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    title: 'Aurora Launcher',
};

export const api = {
    ws: 'ws://eu01.qreg.net:25034/ws',
    web: 'http://eu01.qreg.net:25034',
    publicKey,
};

export const appPath = '.aurora-launcher';
