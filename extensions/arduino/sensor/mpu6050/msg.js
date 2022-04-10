/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MPU6050_CATEGORY: 'MPU6050',
        MPU6050_INIT: 'init mpu6050 accelerometer range %1 gyro range %2 filter bandwidth %3',
        MPU6050_READDATA: 'mpu6050 read data',
        MPU6050_ACCELERATION: 'mpu6050 %1 axis acceleration (m/s^2)',
        MPU6050_GYRO: 'mpu6050 %1 axis rotation (rad/s)',
        MPU6050_TEMPERATURE: 'mpu6050 temperature (℃)'
    });
    return Blockly;
}

exports = addMsg;
