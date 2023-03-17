import { LINK } from "@/constants/link";
import useDatum from "@/hooks/useDatum";
import classNames from "classnames";
import HighlightedItem from "../parts/HighlightedItem";
import LinkIcon from "../parts/LinkIcon";
import TitleH1 from "../parts/TitleH1";
import TitleH2 from "../parts/TitleH2";
import styles from "./SectionAbout.module.scss";

const data = {
  JP: {
    text: [
      "名前",
      "加藤大地 (Daichi KATO)",
      "所属",
      "東京大学理学部情報科学科4年",
      "専攻",
      "自然言語処理",
      "Webエンジニアとして",
      "研究、機械学習、競プロ、趣味の開発で",
      "低レイヤーな実装、処理速度が求められる環境で",
      "その他",
      "応用情報技術者試験 取得予定",
    ],
    history: [
      {
        title: "宮城県　仙台第二高等学校",
        period: {
          start: "2016/04",
          end: "2019/03",
        },
      },
      {
        title: "宮城県　仙台第二高等学校",
        period: {
          start: "2016/04",
          end: "2019/03",
        },
      },
    ],
  },
  EN: {
    text: [
      "Name",
      "Daichi KATO (加藤 大地)",
      "所属",
      "東京大学理学部情報科学科4年",
      "専攻",
      "自然言語処理",
      "Webエンジニアとして",
      "研究、機械学習、競プロ、趣味の開発で",
      "低レイヤーな実装、処理速度が求められる環境で",
      "その他",
      "応用情報技術者試験 取得予定",
    ],
    history: [
      {
        title: "宮城県　仙台第二高等学校",
        period: {
          start: "2016/04",
          end: "2019/03",
        },
      },
      {
        title: "宮城県　仙台第二高等学校",
        period: {
          start: "2016/04",
          end: "2019/03",
        },
      },
    ],
  },
} as const;

export default function SectionAbout() {
  const { datum } = useDatum(data);

  return (
    <div className={styles.sectionAbout}>
      <TitleH1 title="About" />

      <TitleH2 title="Profile" />
      <div
        className={classNames(styles.line, "_contentMarginLeft", styles.Flex)}
      >
        <p className={styles.left}>{datum.text[0]}</p>
        <p className={styles.right}>{datum.text[1]}</p>
      </div>
      <div
        className={classNames(styles.line, "_contentMarginLeft", styles.Flex)}
      >
        <p className={styles.left}>{datum.text[2]}</p>
        <p className={styles.right}>{datum.text[3]}</p>
      </div>
      <div
        className={classNames(styles.line, "_contentMarginLeft", styles.Flex)}
      >
        <p className={styles.left}>{datum.text[4]}</p>
        <p className={styles.right}>{datum.text[5]}</p>
      </div>
      <div className={classNames(styles.links, "_contentMarginLeft")}>
        <LinkIcon src="/github-mark.png" href={LINK.GITHUB} />
        <LinkIcon src="/qiita.png" href={LINK.QIITA} />
        <LinkIcon src="/twitter.png" href={LINK.TWITTER} />
      </div>

      <TitleH2 title="History" />
      {datum.history.map(
        (
          iter: {
            title: string;
            period: { start: string; end: string } | undefined;
          },
          index: number
        ) => {
          return (
            <HighlightedItem
              key={index}
              title={iter.title}
              period={iter.period}
            ></HighlightedItem>
          );
        }
      )}

      <TitleH2 title="Skills" />
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>{datum.text[6]}</p>
      </div>
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>・TypeScript & React, Vue.js, Next.js</p>
        <p>・HTML/CSS, PHP & Laravel</p>
        <p>・AWS, GCP</p>
        <p>・Three.js & React Three Fiber, Phaser</p>
      </div>

      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>{datum.text[7]}</p>
      </div>
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>・Python & PyTorch</p>
        <p>・Unity (with C#)</p>
      </div>

      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>{datum.text[8]}</p>
      </div>
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>・Rust</p>
        <p>・C, C++</p>
        <p>・OCaml</p>
      </div>

      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>{datum.text[9]}</p>
      </div>
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>・TOEFL: 92</p>
        <p>・{datum.text[10]}</p>
      </div>
    </div>
  );
}
