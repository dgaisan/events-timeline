import classNames from "classnames";
import styles from "./index.module.scss";
import { OwnProps } from "./types";

const VerticalLine = ({ isAbove }: OwnProps): JSX.Element => (
  <div
    className={classNames(styles.verticalLine, {
      [styles.above]: isAbove,
      [styles.bellow]: !isAbove
    })}
  />
);

export default VerticalLine;
