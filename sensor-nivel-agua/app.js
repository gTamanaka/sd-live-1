const { Kafka } = require("kafkajs");
const kafka = new Kafka({
  clientId: "sensor-nivel-agua",
  brokers: ["localhost:29092"],
});

// Define a variável de nome do sensor utilizar uma variável de ambiente
const sensorName = process.env.SENSOR_NAME

const producer = async (leitura) => {
  const producer = kafka.producer();
  await producer.connect();
  await producer.send({
    topic: "sensor",
    messages: [
      {
        value: leitura, // O valor da leitura
        timestamp: Date.now(), // Representa o horário que a leitura foi coletada
        key: sensorName // Representa o sensor que coletou a leitura, por facilidade coloquei aqui,
                        // mas poderia estarno header
      },
    ],
  });
};

// Invoca a cada 10000 ms (10s) um envio de valor aleatório entre 0 e 1 representando 
// o volume de água do reservatório em %
// Em uma aplicaćão real seria onde coletáriamos os dados de um sensor.
setInterval(() => {
  let nivel = Math.random();
  producer(nivel.toString());
}, 10000);

console.log( `${sensorName} UP`)
