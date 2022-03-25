const wifiWebServer = formatMessage => ({
    name: formatMessage({
        id: 'wifiWebServer.name',
        default: 'WebServer',
        description: 'Name of Wifi Web Server'
    }),
    extensionId: 'wifiWebServer',
    version: '1.0.0',
    supportDevice: ['arduinoEsp8266','arduinoEsp32'],
    author: 'iRobochakra',
    iconURL: `asset/wifiWebServer.png`,
    description: formatMessage({
        id: 'wifiWebServer.description',
        default: 'Controlling your Hardware with WiFi Web Server',
        description: 'Description of Wifi Web Server'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    official: true,
    tags: ['other'],
    helpLink: ''
});

module.exports = wifiWebServer;
