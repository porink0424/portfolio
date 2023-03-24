import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./HighlightedItem.module.scss";

type Props = {
  title: string;
  href?: string;
  period?: { start: string; end: string };
  children?: ReactNode;
};

export default function HighlightedItem({
  title,
  href,
  period,
  children,
}: Props) {
  return (
    <div className={styles.highlightedItem}>
      <div className={classNames(styles.leftborder, "_titleH2MarginLeft")} />
      <div className="_contentMarginLeft">
        <div className={styles.content}>
          {href ? (
            <Link
              className={styles.title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </Link>
          ) : (
            <div className={styles.title}>{title}</div>
          )}

          {period && (
            <p className={styles.period}>
              {period.start} ~ {period.end}
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
