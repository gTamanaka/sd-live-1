const { Kafka } = require('kafkajs')
const app = require('express')()
var bodyParser = require('body-parser')


const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:29092']
})

const consumer = async () =>{
    const consumer = kafka.consumer({ groupId: 'test-group' })
    
    await consumer.connect()
    await consumer.subscribe({ topic: 'sensor', fromBeginning: true })
    
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(message.value.toString())
        },
    })
}

const producer = async (jogada) =>{
    const producer = kafka.producer()
    await producer.connect()
    await producer.send({
        topic: 'jogada',
        messages: [
            { value: jogada },
        ],
    })
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/", async (req,res,next)=>{
    try {
        await producer(req.body.jogada)
        return res.status(200).send("OK")
    } catch (error) {
        console.error(error)
        return res.status(400).send("Kafka is down") //Não é necessariamente verdade
    }
})

consumer()
app.listen(3000, async ()=>{

    console.log("UP")
   
})