import publicKey from './public.pem?raw';

export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    title: 'Enchanted Isles',
};

export const api = {
    ws: 'ws://eu01.qreg.net:25034/ws',
    web: 'http://eu01.qreg.net:25034',
    publicKey,
};

export const appPath = '.aurora-launcher';

export const discordRPC = {
    appId: '1214685301793103902',
    default: {
        firstLineText: 'Тестирую лаунчер',
        secondLineText: 'Чувак, ты думал здесь что-то будет?',
        buttons: [
            {
                label: 'Прекол',
                url: 'https://youtu.be/dQw4w9WgXcQ',
            },
        ],
        largeImageKey: 'logo',
        smallImageKey: 'logo_mc',
        largeImageText: 'Aurora Launcher',
        smallImageText: 'Minecraft',
    },
    profile: {
        firstLineText: 'Выбираю тестируемый профиль игры',
        secondLineText: 'Загружаю {server}',
        buttons: [
            {
                label: 'Прекол',
                url: 'https://youtu.be/dQw4w9WgXcQ',
            },
        ],
        largeImageKey: 'logo',
        smallImageKey: 'logo_mc',
        largeImageText: 'Aurora Launcher',
        smallImageText: 'Minecraft',
    },
    game: {
        firstLineText: 'Играю на тестовом сервере',
        secondLineText: 'Играю за {nickname}',
        buttons: [
            {
                label: 'Прекол',
                url: 'https://youtu.be/dQw4w9WgXcQ',
            },
        ],
        largeImageKey: 'logo',
        smallImageKey: 'logo_mc',
        largeImageText: 'Aurora Launcher',
        smallImageText: 'Minecraft',
    },
};
