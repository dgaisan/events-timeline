import NoIcon from "./../../event_type_icons/none.svg";
import LifeIcon from "./../../event_type_icons/life.svg";
import PoliticsIcon from "./../../event_type_icons/politics.svg";
import SportIcon from "./../../event_type_icons/sport.svg";
import { EventType } from "../../interfaces/Event";
import styles from "./index.module.scss";
import { OwnProps } from "./types";

const Card = ({ event }: OwnProps): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.eventName}>
      <img alt="Event Type Icon" src={getIconForEvent(event.eventType)} />
      <span>{event.eventName}</span>
    </div>
    <div className={styles.date}>
      <img alt="Event Icon" src={"event.eventLogo"} />
      <span>{event.eventDate}</span>
    </div>
  </div>
);

function getIconForEvent(eventType: EventType): string | undefined {
  switch (eventType) {
    case EventType.NONE:
      return NoIcon;
    case EventType.LIFE:
      return LifeIcon;
    case EventType.POLITIC:
      return PoliticsIcon;
    case EventType.SPORT:
      return SportIcon;
  }
}

export default Card;
