import { Event } from "../../interfaces/Event";
import HorizontalLine from "../HorizontalLine";
import VerticalLine from "../VerticalLine";
import styles from "./index.module.scss";
import { OwnProps } from "./types";
import moment from "moment";
import SingleEvent from "../SingleEvent";


export const Timeline = ({events}: OwnProps) => {
  
  events.sort((a, b) => {
    const date1 = a.eventDate;
    const date2 = b.eventDate;

    return moment(new Date(date1)).diff(moment(new Date(date2)));
  });

  return (
    <div className={styles.container}>
      <HorizontalLine />
      {events.map((event, index) => (
        <SingleEvent event={event} isAbove={index % 2 === 0} key={index} />
      ))}
    </div>
  );
};
