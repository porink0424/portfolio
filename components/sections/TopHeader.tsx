import { SECTION, SECTION_DOM_ID, SECTION_KEY } from "@/constants/section";
import useSectionItemsBar from "@/hooks/useSectionItemsBar";
import Link from "next/link";
import { useRef } from "react";
import LanguageSelector from "../parts/LanguageSelector";
import styles from "./TopHeader.module.scss";

export default function TopHeader() {
  const barRef = useRef<HTMLDivElement | null>(null);
  const itemsWrapperRef = useRef<HTMLDivElement | null>(null);

  useSectionItemsBar(barRef, itemsWrapperRef);

  return (
    <div className={styles.topHeader}>
      <p className={styles.name}>Daichi KATO</p>
      <div className={styles.sectionItems}>
        <div className={styles.bar} ref={barRef} />
        <div className={styles.wrapper} ref={itemsWrapperRef}>
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
      </div>
      <div className={styles.languageselector}>
        <LanguageSelector />
      </div>
    </div>
  );
}
