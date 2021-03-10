from kafka import KafkaProducer
import json
import random
import time
from datetime import datetime
import os


producer = KafkaProducer(bootstrap_servers='localhost:29092')

# Recupera o nome do sensor como sendo uma variável de ambiente
print(os.environ["SENSOR_NAME"] + " UP")

while True:
    reading =  random.randint(24,32) # Aqui estamos simulando a leitura do sensor de temperatura
    reading =  bytes( str(reading), 'utf-8') # Transforma a leitura em bytes para poder enviar, poderia ter feito tudo em uma linha
    sensor_name=  bytes(os.environ["SENSOR_NAME"], 'utf-8') #Define o nome do sensor pela variável de ambiente
    producer.send('sensor', key = sensor_name, value = reading) # Envia a leiura de mentira
    time.sleep(60) #Espera 60 segundos para enviar de novo
