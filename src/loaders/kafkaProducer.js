// src/loaders/kafkaProducer.js
const { Kafka } = require('kafkajs');
const kafkaConfig = require('../config/kafka');

let producer;

function createProducer() {
  if (producer) return producer;

  const kafka = new Kafka({
    clientId: kafkaConfig.clientId,
    brokers: kafkaConfig.brokers
  });

  producer = kafka.producer();
  return producer;
}

async function connectProducer() {
  const p = createProducer();
  await p.connect();
  return p;
}

module.exports = { createProducer, connectProducer };
