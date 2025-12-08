// src/loaders/kafkaConsumer.js
const { Kafka } = require('kafkajs');
const kafkaConfig = require('../config/kafka');

function createConsumer({ groupId } = {}) {
  const kafka = new Kafka({
    clientId: kafkaConfig.clientId,
    brokers: kafkaConfig.brokers
  });

  return kafka.consumer({ groupId: groupId || kafkaConfig.groupId });
}

module.exports = { createConsumer };
