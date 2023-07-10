import { LINK } from "@/constants/link";
import useSelectData from "@/hooks/useSelectData";
import useWindowSize from "@/hooks/useWindowSize";
import classNames from "classnames";
import HighlightedItem from "../parts/HighlightedItem";
import LinkIcon from "../parts/LinkIcon";
import TitleH1 from "../parts/TitleH1";
import TitleH2 from "../parts/TitleH2";
import styles from "./SectionAbout.module.scss";

const data = {
  JP: {
    text: [
      "名前 :",
      "加藤大地 (Daichi KATO)",
      "所属 :",
      "東京大学 情報理工学系研究科 コンピュータ科学専攻 修士1年",
      "専攻 :",
      "自然言語処理",
      "Webエンジニアとして",
      "研究、機械学習、競プロ、趣味の開発で",
      "低レイヤーな実装、処理速度が求められる環境で",
      "その他",
      "応用情報技術者試験",
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
        title: "東京大学　理学部情報科学科",
        period: {
          start: "2019/04",
          end: "2023/03",
        },
      },
      {
        title: "東京大学大学院　情報理工学系研究科コンピュータ科学専攻",
        period: {
          start: "2023/04",
          end: "現在",
        },
      },
    ],
  },
  EN: {
    text: [
      "Name :",
      "Daichi KATO (加藤 大地)",
      "Affiliation :",
      "Department of Computer Science, Graduate School of Information Science and Technology, The University of Tokyo, M1",
      "Major :",
      "NLP (Natural Language Processing)",
      "As a Web engineer :",
      "In research, ML, competitive programming, and personal development :",
      "In environments that require low-layer implementation and processing speed :",
      "Others :",
      "Applied Information Technology Engineer Examination (応用情報技術者試験)",
    ],
    history: [
      {
        title: "Sendai Daini High School, Miyagi",
        period: {
          start: "2016/04",
          end: "2019/03",
        },
      },
      {
        title: "Department of Information Science, The University of Tokyo",
        period: {
          start: "2019/04",
          end: "2023/03",
        },
      },
      {
        title:
          "Department of Computer Science, Graduate School of Information Science and Technology, The University of Tokyo",
        period: {
          start: "2023/04",
          end: "Present",
        },
      },
    ],
  },
} as const;

export default function SectionAbout() {
  const { smallerThanTablet } = useWindowSize();
  const { selectedData } = useSelectData(data);

  return (
    <div className={styles.sectionAbout}>
      <TitleH1 title="About" />

      <TitleH2 title="Profile" />
      <div
        className={classNames(styles.line, {
          [styles.Flex]: !smallerThanTablet,
          _contentMarginLeft: !smallerThanTablet,
        })}
      >
        <p className={styles.left}>{selectedData.text[0]}</p>
        <p className={styles.right}>{selectedData.text[1]}</p>
      </div>
      <div
        className={classNames(styles.line, {
          [styles.Flex]: !smallerThanTablet,
          _contentMarginLeft: !smallerThanTablet,
        })}
      >
        <p className={styles.left}>{selectedData.text[2]}</p>
        <p className={styles.right}>{selectedData.text[3]}</p>
      </div>
      <div
        className={classNames(styles.line, {
          [styles.Flex]: !smallerThanTablet,
          _contentMarginLeft: !smallerThanTablet,
        })}
      >
        <p className={styles.left}>{selectedData.text[4]}</p>
        <p className={styles.right}>{selectedData.text[5]}</p>
      </div>
      <div
        className={classNames(styles.links, {
          _contentMarginLeft: !smallerThanTablet,
        })}
      >
        <LinkIcon src="./github-mark.png" href={LINK.GITHUB} />
        <LinkIcon src="./qiita.png" href={LINK.QIITA} />
        <LinkIcon src="./twitter.png" href={LINK.TWITTER} />
      </div>

      <TitleH2 title="History" />
      {selectedData.history.map(
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
      <div
        className={classNames(styles.line, {
          _contentMarginLeft: !smallerThanTablet,
        })}
      >
        <p>{selectedData.text[6]}</p>
      </div>
      <ul
        className={classNames(styles.line, {
          _contentMarginLeft: !smallerThanTablet,
        })}
      >
        <li>TypeScript & React & Next.js, Vue.js</li>
        <li>HTML/CSS</li>
        <li>PHP & Laravel</li>
        <li>AWS, GCP</li>
        <li>Three.js, Phaser</li>
      </ul>

      <div
        className={classNames(styles.line, {
          _contentMarginLeft: !smallerThanTablet,
        })}
      >
        <p>{selectedData.text[7]}</p>
      </div>
      <ul
        className={classNames(styles.line, {
          _contentMarginLeft: !smallerThanTablet,
        })}
      >
        <li>Python & PyTorch</li>
        <li>Unity (with C#)</li>
        <li>Flutter, Dart</li>
      </ul>

      <div
        className={classNames(styles.line, {
          _contentMarginLeft: !smallerThanTablet,
        })}
      >
        <p>{selectedData.text[8]}</p>
      </div>
      <ul
        className={classNames(styles.line, {
          _contentMarginLeft: !smallerThanTablet,
        })}
      >
        <li>Rust</li>
        <li>C, C++</li>
        <li>OCaml</li>
      </ul>

      <div
        className={classNames(styles.line, {
          _contentMarginLeft: !smallerThanTablet,
        })}
      >
        <p>{selectedData.text[9]}</p>
      </div>
      <ul
        className={classNames(styles.line, {
          _contentMarginLeft: !smallerThanTablet,
        })}
      >
        <li>TOEFL : 92</li>
        <li>{selectedData.text[10]}</li>
      </ul>
    </div>
  );
}
