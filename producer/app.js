const { Kafka } = require('kafkajs')
const app = require('express')()
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:29092']
})


app.listen(3000, async ()=>{
    // const producer = kafka.producer()
    // await producer.connect()
    // await producer.send({
    //     topic: 'test-topic',
    //     messages: [
    //         { value: 'Hello KafkaJS user!' },
    //     ],
    // })
    // console.log("Aqui")
    // await producer.disconnect()
    console.log("UP")
    const consumer = kafka.consumer({ groupId: 'test-group' })
    
    await consumer.connect()
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
    
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(message.value.toString())
        },
    })
})