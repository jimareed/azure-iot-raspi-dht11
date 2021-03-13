'use strict';

var uuid = require('uuid');
var Protocol = require('azure-iot-device-mqtt').Mqtt;

var Client = require('azure-iot-device').Client;
var Message = require('azure-iot-device').Message;

var sensor = require("node-dht-sensor");
 
// String containing Hostname, Device Id & Device Key in the following formats:
//  "HostName=<iothub_host_name>;DeviceId=<device_id>;SharedAccessKey=<device_key>"
var connectionString = process.env.DEVICE_CONNECTION_STRING;
if (!connectionString) {
  console.log('Please set the DEVICE_CONNECTION_STRING environment variable.');
  process.exit(-1);
}

var client = Client.fromConnectionString(connectionString, Protocol);

client.open(function (err) {
  if (err) {
    console.error('Could not connect: ' + err.message);
  } else {
    console.log('Client connected');

    client.on('error', function (err) {
      console.error(err.message);
      process.exit(-1);
    });

    // any type of data can be sent into a message: bytes, JSON...but the SDK will not take care of the serialization of objects.
    var message = new Message(JSON.stringify({
      value: 'Hello from Raspberry Pi!'
    }));
    // A message can have custom properties that are also encoded and can be used for routing
    message.properties.add('propertyName', 'propertyValue');

    // A unique identifier can be set to easily track the message in your application
    message.messageId = uuid.v4();

    console.log('Sending message: ' + message.getData());
    client.sendEvent(message, function (err) {
      if (err) {
        console.error('Could not send: ' + err.toString());
        process.exit(-1);
      } else {
        console.log('Message sent: ' + message.messageId);
        process.exit(0);
      }
    });
  }
});

sensor.read(11, 4, function(err, temperature, humidity) {
  if (!err) {
    console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
  }
});

sensor.read(11, 4, function(err, temperature, humidity) {
  if (!err) {
    console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
  }
});

sensor.read(11, 4, function(err, temperature, humidity) {
  if (!err) {
    console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
  }
});
