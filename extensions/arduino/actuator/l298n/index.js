const l298n = formatMessage => ({
    name: 'L298N',
    extensionId: 'l298n',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32'],
    author: 'iRobochakra',
    iconURL: `asset/L28N.png`,
    description: formatMessage({
        id: 'l298n.description',
        default: 'l298n motor drive module.',
        description: 'Description of l298n'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    official: true,
    tags: ['actuator'],
    helpLink: ''
});

module.exports = l298n;
