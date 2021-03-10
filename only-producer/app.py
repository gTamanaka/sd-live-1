from kafka import KafkaProducer
import json
import random
import time
from datetime import datetime

# Create an instance of the Kafka producer
producer = False
while (not producer):
    try:
        print("Tentando conectar")
        producer = KafkaProducer(bootstrap_servers='localhost:29092',value_serializer=lambda v: str(v).encode('utf-8'))
    except Exception as e:
        print(e)
        time.sleep(20)

# Call the producer.send method with a producer-record
print("Only Producer UP")
while True:
    horario = datetime.now()
    print(horario)
    producer.send('test-topic', horario)
    time.sleep(10)