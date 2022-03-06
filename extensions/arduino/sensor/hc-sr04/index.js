const hcSr04 = formatMessage => ({
    name: 'HC_SR04',
    extensionId: 'hc_sr04',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'iRoboChakra',
    iconURL: `asset/HC-SR04.png`,
    description: formatMessage({
        id: 'hc-sr04.description',
        default: 'HC-SR04 distance measurement module.',
        description: 'Description of HC-SR04'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    official: true,
    tags: ['sensor'],
    helpLink: ''
	});

module.exports = hcSr04;
