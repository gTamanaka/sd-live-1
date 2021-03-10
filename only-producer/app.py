from kafka import KafkaProducer
import json
import random
import time
from datetime import datetime

# Create an instance of the Kafka producer
producer = KafkaProducer(bootstrap_servers='localhost:29092',
                            value_serializer=lambda v: str(v).encode('utf-8'))

# Call the producer.send method with a producer-record
print("Only Producer UP")
while True:
    producer.send('test-topic', datetime.now())
    time.sleep(10)