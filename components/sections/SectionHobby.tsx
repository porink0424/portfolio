import useDatum from "@/hooks/useDatum";
import classNames from "classnames";
import TitleH1 from "../parts/TitleH1";
import styles from "./SectionHobby.module.scss";

const data = {
  JP: {
    text: [
      "・ラーメン巡り",
      "・ハンドボール、サッカー",
      "・ジム",
      "・ゲーム（ドラクエ、テトリス）、漫画",
    ],
  },
  EN: {
    text: [
      "・ラーメン巡り",
      "・ハンドボール、サッカー",
      "・ジム",
      "・ゲーム（ドラクエ、テトリス）、漫画",
    ],
  },
} as const;

export default function SectionHobby() {
  const { datum } = useDatum(data);

  return (
    <div className={styles.sectionHobby}>
      <TitleH1 title="Hobby" />

      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>{datum.text[0]}</p>
        <p>{datum.text[1]}</p>
        <p>{datum.text[2]}</p>
        <p>{datum.text[3]}</p>
      </div>
    </div>
  );
}
