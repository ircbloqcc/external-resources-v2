const HC05BluetoothEsp8266 = formatMessage => ({
    name: formatMessage({
        id: 'HC05BluetoothEsp8266.name',
        default: 'HC05 Bluetooth Esp8266',
        description: 'Name of HC05 Bluetooth Esp8266'
    }),
    extensionId: 'HC05BluetoothEsp8266',
    version: '1.0.0',
    supportDevice: 'arduinoEsp8266',
    author: 'iRobochakra',
    iconURL: `asset/HC05BluetoothEsp8266.png`,
    description: formatMessage({
        id: 'HC05BluetoothEsp8266.description',
        default: 'Data Can be transmit or Receive through Bluetooth from Esp8266.',
        description: 'Description of HC05 Bluetooth Esp8266'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    official: true,
    tags: ['communication'],
    helpLink: ''
});

module.exports = HC05BluetoothEsp8266;
