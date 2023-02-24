import { shallow, ShallowWrapper } from "enzyme";
import { Event, EventType } from "./../../interfaces/Event";
import mockEvents from "./../../mockData/events";
import Card from "../Card";
import VerticalLine from "../VerticalLine";
import SingleEvent from ".";

describe("CareerHighlights", () => {
  const setupWrapper = (
    isEvent: boolean,
    event: Event
  ): ShallowWrapper => {
    return shallow(<SingleEvent event={event} isAbove={isEvent} />);
  };

  describe("Single Event", () => {
    it("Creates a card and a verticalLine", () => {
      const event: Event = {
        eventName: mockEvents[0].eventName,
        eventDate: mockEvents[0].eventDate,
        eventType: EventType.LIFE
      };
      const wrapper = setupWrapper(true, event);

      expect(wrapper.find(Card)).toHaveLength(1);
      expect(wrapper.find(VerticalLine)).toHaveLength(1);
    });
  });
});
