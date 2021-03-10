const { Kafka } = require('kafkajs') //Importar as biblioteca do kafka

const kafka = new Kafka({
  clientId: 'only-consumer',
  brokers: ['localhost:29092'] //Espeficicar o endereço onde está o kafka
})

const start = async () =>{
    try {
        
        const consumer = kafka.consumer({ groupId: 'producer' })
        
        await consumer.connect()
        await consumer.subscribe({ topic: 'test-topic'}) // Escolha o tópico que você quer ouvir
        
        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log(message.value.toString()) // Exibe as mensagens disponíveis no tópico
            },
        })
        console.log("Listen")
    } catch (error) {
        start()
    }
}

start()