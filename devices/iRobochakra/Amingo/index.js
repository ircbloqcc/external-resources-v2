const Amingo = formatMessage => ({
    name: 'Amingo',
    deviceId: 'Amingo_arduinoUno',
    manufactor: 'iRobochakra',
    learnMore: '',
    iconURL: 'asset/Amingo.png',
    description: formatMessage({
        id: 'Amingo.description',
        default: 'Your expessive robot friend.'
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
    connectionIconURL: 'asset/Amingo-illustration.svg',
    connectionSmallIconURL: 'asset/Amingo-small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino', 'kit'],
    deviceExtensions: ['Amingo'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: ''
});

module.exports = Amingo;
