import { LINK } from "@/constants/link";
import classNames from "classnames";
import HighlightedItem from "../parts/HighlightedItem";
import LinkIcon from "../parts/LinkIcon";
import TitleH1 from "../parts/TitleH1";
import TitleH2 from "../parts/TitleH2";
import styles from "./SectionAbout.module.scss";

export default function SectionAbout() {
  return (
    <div className={styles.sectionAbout}>
      <TitleH1 title="About" />

      <TitleH2 title="Profile" />
      <div
        className={classNames(styles.line, "_contentMarginLeft", styles.Flex)}
      >
        <p className={styles.left}>名前</p>
        <p className={styles.right}>加藤大地 (Daichi KATO)</p>
      </div>
      <div
        className={classNames(styles.line, "_contentMarginLeft", styles.Flex)}
      >
        <p className={styles.left}>所属</p>
        <p className={styles.right}>東京大学理学部情報科学科4年</p>
      </div>
      <div
        className={classNames(styles.line, "_contentMarginLeft", styles.Flex)}
      >
        <p className={styles.left}>専攻</p>
        <p className={styles.right}>東京大学理学部情報科学科4年</p>
      </div>
      <div
        className={classNames(styles.links, "_contentMarginLeft", styles.Flex)}
      >
        <LinkIcon src="/github-mark.png" href={LINK.GITHUB} />
        <LinkIcon src="/qiita.png" href={LINK.QIITA} />
        <LinkIcon src="/twitter.png" href={LINK.TWITTER} />
      </div>

      <TitleH2 title="History" />
      <HighlightedItem
        title="宮城県　仙台第二高等学校"
        period={{
          start: "2016/04",
          end: "2019/03",
        }}
      ></HighlightedItem>
      <HighlightedItem
        title="宮城県　仙台第二高等学校"
        period={{
          start: "2016/04",
          end: "2019/03",
        }}
      ></HighlightedItem>
      <HighlightedItem
        title="宮城県　仙台第二高等学校"
        period={{
          start: "2016/04",
          end: "2019/03",
        }}
      ></HighlightedItem>

      <TitleH2 title="Skills" />
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>Webエンジニアとして</p>
      </div>
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>・TypeScript & React, Vue.js, Next.js</p>
        <p>・HTML/CSS, PHP & Laravel</p>
        <p>・AWS, GCP</p>
        <p>・Three.js & React Three Fiber, Phaser</p>
      </div>

      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>研究、機械学習、競プロ、趣味の開発で</p>
      </div>
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>・Python & PyTorch</p>
        <p>・Unity (with C#)</p>
      </div>

      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>低レイヤーな実装、処理速度が求められる環境で</p>
      </div>
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>・Rust</p>
        <p>・C, C++</p>
        <p>・OCaml</p>
      </div>

      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>その他</p>
      </div>
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>・TOEFL: 92</p>
        <p>・応用情報技術者試験 取得予定</p>
      </div>
    </div>
  );
}
