from kafka import KafkaProducer
import json
import random
import time
from datetime import datetime

# Create an instance of the Kafka producer
producer = KafkaProducer(bootstrap_servers='localhost:29092')

# Call the producer.send method with a producer-record
print("Sensor de temperatura UP")
while True:
    reading =  random.randint(24,32) #
    reading =  bytes( str(reading), 'utf-8')
    now = datetime.now()
    timestamp = datetime.timestamp(now)
    producer.send('sensor', key =b'Sensor Temperatura', value = reading)
    time.sleep(60)