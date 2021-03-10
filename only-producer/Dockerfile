FROM python:slim

WORKDIR /app

COPY . .
RUN pip install kafka-python

ENTRYPOINT [ "python", "-u"]
CMD [ "app.py" ]