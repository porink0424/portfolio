import useSelectData from "@/hooks/useSelectData";
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
  const { selectedData } = useSelectData(data);

  return (
    <div className={styles.sectionHobby}>
      <TitleH1 title="Hobby" />

      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>{selectedData.text[0]}</p>
        <p>{selectedData.text[1]}</p>
        <p>{selectedData.text[2]}</p>
        <p>{selectedData.text[3]}</p>
      </div>
    </div>
  );
}
