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
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p className={styles.left}>名前</p>
        <p className={styles.right}>加藤大地 (Daichi KATO)</p>
      </div>
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p className={styles.left}>所属</p>
        <p className={styles.right}>東京大学理学部情報科学科4年</p>
      </div>
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p className={styles.left}>専攻</p>
        <p className={styles.right}>東京大学理学部情報科学科4年</p>
      </div>
      <div className={classNames(styles.links, "_contentMarginLeft")}>
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
    </div>
  );
}
