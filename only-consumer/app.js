const { Kafka } = require('kafkajs')
const kafka = new Kafka({
  clientId: 'only-consumer',
  brokers: ['localhost:29092']
})

const start = async () =>{
    try {
        
        const consumer = kafka.consumer({ groupId: 'producer' })
        
        await consumer.connect()
        await consumer.subscribe({ topic: 'test-topic'})
        
        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log(message.value.toString())
            },
        })
        console.log("Listen")
    } catch (error) {
        start()
    }
}

start()