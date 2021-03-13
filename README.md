# azure-iot-raspi-dht11
Connect a Raspberry Pi with a DHT11 Temperature sensor to Azure IoT Hub

## Setup

1. follow instructions in https://github.com/Azure-Samples/azure-iot-samples-node/tree/master/iot-hub/Samples/device to setup Azure IoT Hub instance
2. create device in Azure IoT Hub:
   - Click on IoT Devices in the Azure IoT Hub and select New to create a new device
   - Enter a device ID and select Save
   - Click on the device and copy the Primary Connection String
3. Deploy app to Raspberry Pi. Login to the Raspberry Pi and type the following commands:
```
sudo -i
cd /opt
git clone https://github.com/jimareed/azure-iot-raspi-dht11
cd azure-iot-raspi-dht11
npm init
npm install --unsafe-perm
export DEVICE_CONNECTION_STRING="<connection_string>"
node index.js
```
4. Verify message sent (should see something like)
```
temp: 23C, humdity: 27%
Client connected
Sending message: {"device":"Raspberry Pi - DHT11", "temp":23, "humidity":27}
Message sent: 29e1ea1a-493e-4153-bb40-d8f59210546b
```
5. Verify message received in Azure IoT Hub:
   - from Visual Studio Code, install the extension Azure IoT Tools
   - in the Explorer view, select Azure Iot Hub
   - right click on your device
   - select 'Start Monitoring Built-in Event Endpoint'
   - repeat step 4 above
   - verify the message is displayed in the IoTHubMonitor Output tab in Visual Studio Code

## Sources
- https://github.com/jimareed/azure-iot-raspi
- https://github.com/Azure-Samples/azure-iot-samples-node

## Next Steps
Forward messages in Azure IoT Hub to a database