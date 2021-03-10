const { Kafka } = require("kafkajs");
const kafka = new Kafka({
  clientId: "sensor-nivel-agua",
  brokers: ["localhost:29092"],
});

const sensorName = process.env.SENSOR_NAME

const producer = async (leitura) => {
  const producer = kafka.producer();
  await producer.connect();
  await producer.send({
    topic: "sensor",
    messages: [
      {
        value: leitura,
        timestamp: Date.now(),
        key: sensorName
      },
    ],
  });
};

setInterval(() => {
  let nivel = Math.random();
  producer(nivel.toString());
}, 10000);

console.log( `${sensorName} UP`)