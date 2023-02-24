import React from 'react';
import './App.css';
import { Timeline } from './components/Timeline';
import { Event, EventType } from './interfaces/Event';
import data from './mockData/events';

function App() {
  return (
    <div className="App">
      <>Timeline component.</>
      <Timeline events={sanatizeData(data)}></Timeline>
    </div>
  );
}

function sanatizeData(data: {eventType: string, eventName: string, eventDate: string}[]): Event[] {
  return data.map(({eventType, eventName, eventDate}) => {
    const event: Event = {
      eventName,
      eventDate,
      eventType: EventType.NONE
    };

    switch (eventType.toLowerCase()) {
      case "sport":
        event.eventType = EventType.SPORT;
        break
      case "life":
        event.eventType = EventType.LIFE;
        break
      case "politics":
        event.eventType = EventType.POLITIC;
    }

    return event;
  });
}

export default App;
