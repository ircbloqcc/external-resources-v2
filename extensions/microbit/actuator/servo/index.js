const servo_microbit = formatMessage => ({
    name: formatMessage({
        id: 'servo.name.microbit',
        default: 'Servo',
        description: 'Name of servo microbit'
    }),
    extensionId: 'servo_microbit',
    version: '1.0.0',
    type: 'microbit',
    supportDevice: ['microbit','microbitv2'],
    author: 'iRobochakra',
    iconURL: `asset/servo.png`,
    description: formatMessage({
        id: 'servo.description.microbit',
        default: 'Classic servo support for microbit.',
        description: 'Description of servo microbit'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['actuator'],
    helpLink: ''
});

module.exports = servo_microbit;
