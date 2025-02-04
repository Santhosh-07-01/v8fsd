// EventManagement.js (Module for emitting events)
const EventEmitter = require('events');

class EventManagement extends EventEmitter {
  constructor() {
    super();
  }

  startEvent() {
    console.log("Event started!");
    this.emit('start');
  }

  inProgressEvent() {
    console.log("Event is in progress...");
    this.emit('in-progress');
  }

  completedEvent() {
    console.log("Event completed!");
    this.emit('completed');
  }
}

module.exports = EventManagement;

