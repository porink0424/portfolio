import { LINK } from "@/constants/link";
import { SECTION, SECTION_DOM_ID, SECTION_KEY } from "@/constants/section";
import useSectionItemsBar from "@/hooks/useSectionItemsBar";
import useWindowSize from "@/hooks/useWindowSize";
import classNames from "classnames";
import Link from "next/link";
import { useRef, useState } from "react";
import LanguageSelector from "../parts/LanguageSelector";
import LinkIcon from "../parts/LinkIcon";
import styles from "./TopHeader.module.scss";

export default function TopHeader() {
  const barRef = useRef<HTMLDivElement | null>(null);
  const itemsWrapperRef = useRef<HTMLDivElement | null>(null);

  const { smallerThanTablet } = useWindowSize();
  useSectionItemsBar(barRef, itemsWrapperRef);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.topHeader}>
        {smallerThanTablet ? (
          <>
            <div
              className={styles.opener}
              onClick={() => {
                setOpen((cur) => !cur);
              }}
            >
              <span
                className={classNames(styles.top, { [styles.Open]: open })}
              />
              <span
                className={classNames(styles.center, { [styles.Open]: open })}
              />
              <span
                className={classNames(styles.bottom, { [styles.Open]: open })}
              />
            </div>
            <Link
              className={styles.name}
              href="#"
              onClick={() => {
                setOpen(false);
              }}
            >
              Daichi KATO
            </Link>
            <div className={styles.languageselector}>
              <LanguageSelector />
            </div>
          </>
        ) : (
          <>
            <Link className={styles.name} href="#">
              Daichi KATO
            </Link>
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
          </>
        )}
      </div>
      {open && (
        <div className={styles.container}>
          <div className={styles.sections}>
            {SECTION_KEY.map((sectionKey, index) => {
              return (
                <Link
                  key={index}
                  href={`#${SECTION_DOM_ID[index]}`}
                  className={styles.item}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <p>{SECTION[sectionKey]}</p>
                </Link>
              );
            })}
          </div>
          <div className={classNames(styles.links, "_contentMarginLeft")}>
            <LinkIcon src="/github-mark.png" href={LINK.GITHUB} />
            <LinkIcon src="/qiita.png" href={LINK.QIITA} />
            <LinkIcon src="/twitter.png" href={LINK.TWITTER} />
          </div>
        </div>
      )}
    </>
  );
}
