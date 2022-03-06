const dht11 = formatMessage => ({
    name: 'DHT11',
    extensionId: 'dht11',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32'],
    author: 'iRobochakra',
    iconURL: `asset/DTH11.png`,
    description: formatMessage({
        id: 'dht11.description',
        default: 'DHT11 Temperature and humidity sensor module.',
        description: 'Description of dht11'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['sensor'],
    helpLink: ''
});

module.exports = dht11;
