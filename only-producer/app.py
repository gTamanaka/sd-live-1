# Este código está cheio de comentários para efeitos de aprendizado
# quando for fazer código para via real não é preciso

from kafka import KafkaProducer #Importa a biblioteca para se comunicar com o Kafka
import time #Importa a biblioteca que contém 
from datetime import datetime #Importa a biblioteca 

# O código abaixo
producer = False
while (not producer):
    try:
        print("Tentando conectar")
        producer = KafkaProducer(bootstrap_servers='localhost:29092',value_serializer=lambda v: str(v).encode('utf-8'))
    except Exception as e:
        print(e)
        time.sleep(20)

print("Only Producer UP")
while True:
    horario = datetime.now()
    print(horario)
    producer.send('test-topic', horario)
    time.sleep(10)