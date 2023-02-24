import classNames from "classnames";
import styles from "./index.module.scss";
import { OwnProps } from "./types";
import Card from "../Card";
import VerticalLine from "../VerticalLine";

const SingleEvent = ({ isAbove, event }: OwnProps): JSX.Element => (
  <div className={classNames(styles.event, isAbove ? styles.above : styles.bellow)}>
    <Card event={event} />
    <VerticalLine isAbove={isAbove}></VerticalLine>
  </div>
);

export default SingleEvent;
