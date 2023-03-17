import classNames from "classnames";
import TitleH1 from "../parts/TitleH1";
import styles from "./SectionHobby.module.scss";

export default function SectionHobby() {
  return (
    <div className={styles.sectionHobby}>
      <TitleH1 title="Hobby" />

      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>・ラーメン巡り</p>
        <p>・ハンドボール、サッカー</p>
        <p>・ジム</p>
        <p>・ゲーム（ドラクエ、テトリス）、漫画</p>
      </div>
    </div>
  );
}
