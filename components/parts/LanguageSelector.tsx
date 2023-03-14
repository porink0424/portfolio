import { LANGUAGE } from "@/constants/language";
import { Language } from "@/types/language";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import styles from "./LanguageSelector.module.scss";

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  // TODO: language stateはいずれcontextにして多言語対応する
  const [language, setLanguage] = useState<Language>(LANGUAGE.JP);

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
            {Object.entries(LANGUAGE).map(([languageKey, languageValue]) => {
              return (
                <div
                  key={languageKey}
                  className={classNames(styles.item, {
                    [styles.Selected]: language === languageValue,
                  })}
                  onClick={() => {
                    setLanguage(languageValue);
                  }}
                >
                  <p className={styles.text}>{languageValue}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
