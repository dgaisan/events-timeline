import classNames from "classnames";
import styles from "./index.module.scss";
import { OwnProps } from "./types";

const VerticalLine = ({ isEven }: OwnProps): JSX.Element => (
  <div
    className={classNames(styles.verticalLine, {
      [styles.even]: isEven,
      [styles.odd]: !isEven
    })}
  />
);

export default VerticalLine;
