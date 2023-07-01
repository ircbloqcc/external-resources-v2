const dataBlock = formatMessage => ({
    name: formatMessage({
        id: 'dataBlock.name',
        default: 'Data Blocks'
    }),
    extensionId: 'dataBlock',
    version: '1.0.0',
    supportDevice: ['iBotV2', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'iRobochakra',
    iconURL: `asset/dataBlock.png`,
    description: formatMessage({
        id: 'dataBlock.description',
        default: 'Data Blocks helps to convert the dataType and ' +
            'it includes the data mapping and constraint'
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

module.exports = dataBlock;
