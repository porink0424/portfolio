import Image from "next/image";
import styles from "./LanguageSelector.module.scss";

export default function LanguageSelector() {
  return (
    <>
      <div className={styles.languageSelector}>
        <div className={styles.image}>
          <Image
            src="/world.svg"
            fill
            style={{ objectFit: "contain" }}
            alt="languageSelector"
          />
        </div>
        <span className={styles.opener} />
      </div>
    </>
  );
}
