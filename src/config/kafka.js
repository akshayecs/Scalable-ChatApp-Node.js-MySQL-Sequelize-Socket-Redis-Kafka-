const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'chat-app',
  brokers: ['kafka:9092'], // Use container name if using Docker Compose
});

module.exports = kafka;
