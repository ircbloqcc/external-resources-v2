const HC05Bluetooth = formatMessage => ({
    name: formatMessage({
        id: 'HC05Bluetooth.name',
        default: 'HC05 Bluetooth',
        description: 'Name of HC05 Bluetooth'
    }),
    extensionId: 'HC05Bluetooth',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'iRobochakra',
    iconURL: `asset/HC05Bluetooth.png`,
    description: formatMessage({
        id: 'HC05Bluetooth.description',
        default: 'Data Can be transmit or Receive through Bluetooth from Arduino.',
        description: 'Description of HC05 Bluetooth'
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

module.exports = HC05Bluetooth;
