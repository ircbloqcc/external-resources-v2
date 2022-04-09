const keypad = formatMessage => ({
    name: formatMessage({
        id: 'keypad.name',
        default: 'Keypad',
        description: 'Name of keypad'
    }),
    extensionId: 'keypad',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'iRobochakra',
    iconURL: `asset/keypad.png`,
    description: formatMessage({
        id: 'keypad.description',
        default: 'Keypad is a library for using matrix style keypads with the Arduino',
        description: 'Description of keypad'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
  	library: 'lib',
    official: true,
    tags: ['other'],
    helpLink: 'https://www.arduino.cc/reference/en/libraries/keypad/'
});

module.exports = keypad;
