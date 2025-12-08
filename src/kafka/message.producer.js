const { connectProducer } = require('../loaders/kafkaProducer');

let producerInstance;

const getProducer = async () => {
  if (!producerInstance) {
    producerInstance = await connectProducer();
  }
  return producerInstance;
};

const produceMessage = async (topic, message) => {
  const producer = await getProducer();
  await producer.send({
    topic,
    messages: [{ key: message.id, value: JSON.stringify(message) }]
  });
};

module.exports = { produceMessage };
