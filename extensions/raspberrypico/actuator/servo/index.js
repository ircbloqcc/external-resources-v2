const servo_raspberrypico = formatMessage => ({
    name: formatMessage({
        id: 'servo.name.raspberrypico',
        default: 'Servo',
        description: 'Name of servo raspberrypico'
    }),
    extensionId: 'servo_raspberrypico',
    version: '1.0.0',
    type: 'raspberrypico',
    supportDevice: ['raspberrypico'],
    author: 'iRobochakra',
    iconURL: `asset/servo.png`,
    description: formatMessage({
        id: 'servo.description.raspberrypico',
        default: 'Classic servo support for raspberrypico.',
        description: 'Description of servo raspberrypico'
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

module.exports = servo_raspberrypico;
