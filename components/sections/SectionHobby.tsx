import useSelectData from "@/hooks/useSelectData";
import classNames from "classnames";
import TitleH1 from "../parts/TitleH1";
import styles from "./SectionHobby.module.scss";

const data = {
  JP: {
    text: [
      "ラーメン巡り",
      "ハンドボール、サッカー",
      "ジム",
      "ゲーム（ドラクエ、テトリス）、漫画",
    ],
  },
  EN: {
    text: [
      "Going around for ramen",
      "Handball, Football",
      "Training at the gym",
      "Video Games (Dragon Quest, Tetris), Comic Books",
    ],
  },
} as const;

export default function SectionHobby() {
  const { selectedData } = useSelectData(data);

  return (
    <div className={styles.sectionHobby}>
      <TitleH1 title="Hobby" />

      <ul className={classNames(styles.line, "_contentMarginLeft")}>
        <li>{selectedData.text[0]}</li>
        <li>{selectedData.text[1]}</li>
        <li>{selectedData.text[2]}</li>
        <li>{selectedData.text[3]}</li>
      </ul>
    </div>
  );
}
