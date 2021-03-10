# Este código está cheio de comentários para efeitos de aprendizado
# quando for fazer código para via real não é preciso
# Este método é apenas paras fins didáticos.

from kafka import KafkaProducer #Importa a biblioteca para se comunicar com o Kafka
import time #Importa a biblioteca que contém 
from datetime import datetime #Importa a biblioteca 

# O código abaixo fica tentando reconectar até que O kafka esteja funcionando
producer = False
while (not producer):
    print("Tentando conectar")
    try:
        #bootstrap_servers é o endereço do servidor do kafka
        #value_serializer é uma função que transforma a entrada value do send() em bytes
        producer = KafkaProducer(bootstrap_servers='localhost:29092',value_serializer=lambda v: str(v).encode('utf-8'))
    except Exception as e:
        #Se der algum erro printa o erro e espera 20 segundos para tentar reconectar
        print(e)
        time.sleep(20)

#Conectou e estamos prontos para enviar mensagem
print("Only Producer UP")
#O loop abaixo envia para o topico test-topic uma data e hora.
while True:
    horario = datetime.now()
    print(horario)
    producer.send('test-topic', horario)
    #Aguarda 10 segundo para enviar novamente a mensagem.
    time.sleep(10)