import { LANGUAGE } from "@/constants/language";
import { useLanguageContext } from "@/contexts/Language.context";
import { LanguageKey } from "@/types/language";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import styles from "./LanguageSelector.module.scss";

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const { languageKey, setLanguageKey } = useLanguageContext();

  return (
    <>
      <div
        className={styles.languageSelector}
        onClick={() => {
          setOpen((cur) => !cur);
        }}
      >
        <div className={styles.image}>
          <Image
            src="/world.svg"
            fill
            style={{ objectFit: "contain" }}
            alt="languageSelector"
          />
        </div>
        <span className={classNames(styles.opener, { [styles.Open]: open })} />
      </div>

      <div className={styles.modalwrapper}>
        {open && (
          <div className={styles.modal}>
            {Object.entries(LANGUAGE).map(([key, value]) => {
              return (
                <div
                  key={key}
                  className={classNames(styles.item, {
                    [styles.Selected]: languageKey === key,
                  })}
                  onClick={() => {
                    setLanguageKey(key as LanguageKey);
                  }}
                >
                  <p className={styles.text}>{value}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
