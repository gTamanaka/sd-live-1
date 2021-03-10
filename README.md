# Live 1 SD: Middleware de comunição

Veja a gravação para entender o contexto do que fizemos aqui, ok?

## Conceitos envolvidos

Para executar o exemplo que falamos sobre o que é um consumidor e um produtor execute o comando abaixo

```
docker-compose up 
```
Para olhar os logs do consumidor:

```
docker-compose logs -f only-consumer
```


## Exemplo dos sensores fakes

Podemos entender os consumidores e produtores como sensores em um sistema. O arquivo sensor-compose.yml um mock do que seria os sensores em
um sistema real. 

```
docker-compose -f sensor-compose.yml up
```
Para olhar os logs do entrypoint é bem similar ao consumer.

```
docker-compose -f sensor-compose.yml logs -f only-consumer
```