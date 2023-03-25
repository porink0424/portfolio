import classNames from "classnames";
import Link from "next/link";
import styles from "./ImageItem.module.scss";

type Props = {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  content: string;
  href: string;
  long?: true;
};

export default function ImageItem({
  imageSrc,
  imageAlt,
  title,
  content,
  href,
  long,
}: Props) {
  return (
    <div className={styles.imageItem}>
      <Link
        href={href}
        className={classNames(styles.imagewrapper, { [styles.Long]: long })}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.image}>
          <img
            style={{ objectFit: "cover" }}
            src={imageSrc}
            alt={imageAlt ?? ""}
          />
        </div>
        <div className={styles.titleTip}>
          <p className={styles.title}>{title}</p>
        </div>
      </Link>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
