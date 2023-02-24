export enum EventType {
  SPORT = "SPORT",
  LIFE = "LIFE",
  POLITIC = "POLITIC",
  NONE = "",
}

export interface Event {
  eventType: EventType;
  eventDate: string;
  eventName: string;
}
