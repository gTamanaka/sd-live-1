from kafka import KafkaProducer
import json
import random
import time
from datetime import datetime
import os


# Create an instance of the Kafka producer
producer = KafkaProducer(bootstrap_servers='localhost:29092')

# Call the producer.send method with a producer-record
print(os.environ["SENSOR_NAME"] + " UP")
while True:
    reading =  random.randint(24,32) #
    reading =  bytes( str(reading), 'utf-8')
    sensor_name=  bytes(os.environ["SENSOR_NAME"], 'utf-8')
    producer.send('sensor', key = sensor_name, value = reading)
    time.sleep(60)