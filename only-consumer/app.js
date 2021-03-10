const { Kafka } = require('kafkajs') //Importar as biblioteca do kafka

// Criar um novo Objeto para comenicação do Kafka
const kafka = new Kafka({
  clientId: 'only-consumer',
  brokers: ['localhost:29092'] //Espeficicar o endereço onde está o kafka
})

// Define a função start que tem por função  criar um consumidor para o tópico test-topic
const start = async () =>{
    try {
        const consumer = kafka.consumer({ groupId: 'producer' })
        
        await consumer.connect()
        await consumer.subscribe({ topic: 'test-topic'}) // Escolha o tópico que você quer ouvir
        
        console.log("Listen")
        // O método abaixo vai ficar ouvindo constantemente as novas mensagens chegando.
        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log(message.value.toString()) // Exibe as mensagens disponíveis no tópico.
            },
        })
    } catch (error) {
        // Se falhar, tenta de novo reconnectar. Está não é a melhor solução, mas era a mais fácil de explicar
        start()
    }
}

// Invoca  a função start que foi criada ali em cima
start()