const iBotV2 = formatMessage => ({
    name: 'iBot V2',
    deviceId: 'iBotV2_arduinoUno',
    manufactor: 'iRobochakra',
    learnMore: '',
    iconURL: 'asset/iBotV2.png',
    description: formatMessage({
        id: 'iBotV2.description',
        default: 'Assemble : Code : Learn : Fun'
    }),
    disabled: false,
    bluetoothRequired: true,
    serialportRequired: true,
    defaultBaudRate: '115200',
    pnpidList: [
    // PL2303
    'USB\\VID_067B&PID_2303',
    // FT232
    'USB\\VID_0403&PID_6001'
    ],
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/iBotV2-illustration.svg',
    connectionSmallIconURL: 'asset/iBotV2-small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino', 'kit'],
    deviceExtensions: ['iBotV2'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: ''
});

module.exports = iBotV2;
