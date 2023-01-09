import HorizontalLine from "../HorizontalLine";
import VerticalLine from "../VerticalLine";
import styles from "./index.module.scss";
import { OwnProps } from "./types";

export const Timeline = ({events}: OwnProps) => (
  <div className={styles.container}>
    <HorizontalLine />
    <VerticalLine isEven={true} />
  </div>
);
