const { Kafka } = require('kafkajs')
const kafka = new Kafka({
  clientId: 'sensor-nivel-agua',
  brokers: ['localhost:29092']
})


const producer = async (leitura) =>{
    const producer = kafka.producer()
    await producer.connect()
    await producer.send({
        topic: 'sensor',
        messages: [
            { value: leitura },
        ],
    })
}

setInterval(()=>{
    let nivel = Math.random()
    producer(nivel.toString())
}, 10000)