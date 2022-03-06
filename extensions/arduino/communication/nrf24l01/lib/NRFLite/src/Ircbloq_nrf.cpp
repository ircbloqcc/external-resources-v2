#include "Ircbloq_nrf.h"

Ircbloq_nrf::Ircbloq_nrf()
{
}

void Ircbloq_nrf::init(uint8_t id, uint8_t ce, uint8_t csn)
{
    nrf24l01.init(id, ce, csn);
}

void Ircbloq_nrf::sendNumber(uint8_t id, float number)
{
    nrf24l01.send(id, &number, sizeof(float));
}

void Ircbloq_nrf::sendString(uint8_t id, String str, uint8_t strLen)
{
    char tx_buffer[strLen];

    str.toCharArray(tx_buffer, strLen + 1);
    nrf24l01.send(id, &tx_buffer, strLen);
}

void Ircbloq_nrf::sendValue(uint8_t id, String name, float value)
{
    char tx_buffer[name.length() + 5];
    String data = name + '=';

    data.toCharArray(tx_buffer, data.length() + 1);
    *(float *)(tx_buffer + data.length()) = value;
    nrf24l01.send(id, tx_buffer, data.length() + 4);
}

uint8_t Ircbloq_nrf::hasData()
{
    return nrf24l01.hasData();
}

void Ircbloq_nrf::readData()
{
    nrf24l01.readData(&rx_buffer);
}

float Ircbloq_nrf::getNumber()
{
    return *(float *)rx_buffer;
}

String Ircbloq_nrf::getString()
{
    return String(rx_buffer);
}

bool Ircbloq_nrf::valueAvailable(String name)
{
    return String(rx_buffer).substring(0, name.length() + sizeof('=')) == (name + '=');
}

float Ircbloq_nrf::getValue(String name)
{
    return *(float *)(rx_buffer + name.length() + sizeof('='));
}
