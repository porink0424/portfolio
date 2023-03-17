import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./HighlightedItem.module.scss";

type Props = {
  title: string;
  period?: { start: string; end: string };
  children?: ReactNode;
};

export default function HighlightedItem({ title, period, children }: Props) {
  return (
    <div className={styles.highlightedItem}>
      <div className={classNames(styles.leftborder, "_titleH2MarginLeft")} />
      <div className="_contentMarginLeft">
        <p className={styles.title}>{title}</p>
        {period && (
          <p className={styles.period}>
            {period.start} ~ {period.end}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
