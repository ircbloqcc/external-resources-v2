const servo_maixduino = formatMessage => ({
    name: formatMessage({
        id: 'servo.name.maixduino',
        default: 'Servo',
        description: 'Name of servo maixduino'
    }),
    extensionId: 'servo_maixduino',
    version: '1.0.0',
    type: 'maixduino',
    supportDevice: ['maixduino'],
    author: 'iRobochakra',
    iconURL: `asset/servo.png`,
    description: formatMessage({
        id: 'servo.description.maixduino',
        default: 'Classic servo support for maixduino.',
        description: 'Description of servo maixduino'
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

module.exports = servo_maixduino;
