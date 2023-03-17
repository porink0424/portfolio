import { LINK } from "@/constants/link";
import { SECTION, SECTION_DOM_ID, SECTION_KEY } from "@/constants/section";
import Link from "next/link";
import LinkIcon from "../parts/LinkIcon";
import styles from "./BottomFooter.module.scss";

export default function BottomFooter() {
  return (
    <div className={styles.bottomFooter}>
      <div className={styles.sectionItems}>
        {SECTION_KEY.map((sectionKey, index) => {
          return (
            <Link
              key={index}
              href={`#${SECTION_DOM_ID[index]}`}
              className={styles.item}
            >
              <p>{SECTION[sectionKey]}</p>
            </Link>
          );
        })}
      </div>
      <div className={styles.links}>
        <LinkIcon src="/github-mark.png" href={LINK.GITHUB} />
        <LinkIcon src="/qiita.png" href={LINK.QIITA} />
        <LinkIcon src="/twitter.png" href={LINK.TWITTER} />
      </div>
      <p className={styles.copyright}>
        <span className={styles.mark}>&copy;</span> Copyright 2023 Daichi Kato.
      </p>
    </div>
  );
}
