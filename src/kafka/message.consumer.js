const { createConsumer } = require('../loaders/kafkaConsumer');

const initConsumer = async () => {
  const consumer = createConsumer();

  await consumer.connect();
  await consumer.subscribe({ topic: 'chat_messages', fromBeginning: false });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const msg = JSON.parse(message.value.toString());
      console.log(`[Kafka Consumer] Received message: ${msg.content} from chat ${msg.chatId}`);
      // Additional processing can go here:
      // e.g., notifications, analytics, caching
    }
  });

  return consumer;
};

module.exports = { initConsumer };
