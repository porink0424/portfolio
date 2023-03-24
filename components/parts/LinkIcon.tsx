import Link from "next/link";
import Image from "next/image";
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
      <Image src={src} alt={alt ?? ""} fill style={{ objectFit: "contain" }} />
    </Link>
  );
}
