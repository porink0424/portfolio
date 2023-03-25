import Link from "next/link";
import styles from "./LinkIcon.module.scss";

type Props = {
  src: string;
  alt?: string;
  href: string;
};

export default function LinkIcon({ src, alt, href }: Props) {
  return (
    <Link
      href={href}
      className={styles.icon}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={src} alt={alt ?? ""} style={{ objectFit: "contain" }} />
    </Link>
  );
}
