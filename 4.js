const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.once('userDetails', (name, age) => {
  console.log(`Hello, ${name}! You are ${age} years old.`);
});


eventEmitter.emit('userDetails', 'Santhu', 25);
eventEmitter.emit('userDetails', 'Sam', 24);
