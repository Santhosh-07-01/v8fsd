// listener.js (Module for listening to events)
const EventManagement = require('./5'); 


const eventManager = new EventManagement();

eventManager.on('start', () => {
  console.log('Listener: Event has started!');
});

eventManager.on('in-progress', () => {
  console.log('Listener: Event is in progress!');
});

eventManager.on('completed', () => {
  console.log('Listener: Event has completed!');
});

eventManager.startEvent();
eventManager.inProgressEvent();
eventManager.completedEvent();
