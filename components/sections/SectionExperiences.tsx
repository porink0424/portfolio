import { LINK } from "@/constants/link";
import useSelectData from "@/hooks/useSelectData";
import Link from "next/link";
import { ReactNode } from "react";
import HighlightedItem from "../parts/HighlightedItem";
import ImageItem from "../parts/ImageItem";
import TitleH1 from "../parts/TitleH1";
import TitleH2 from "../parts/TitleH2";
import styles from "./SectionExperiences.module.scss";

const data = {
  JP: {
    images: [
      {
        imageSrc: "./metalife.png",
        title: "2Dコミュニケーションツール「MetaLife」",
        content:
          "構想、要件定義、設計、実装、保守全てのフェーズに参加しています。",
        href: LINK.METALIFE,
      },
      {
        imageSrc: "./manabitimes.png",
        title: "Webメディア「資格Times」「学びTimes」",
        content:
          "メディアサイトのみならず、CMSのフロント・バック両方の実装&保守を行なっています。",
        href: LINK.MANABITIMES,
      },
      {
        imageSrc: "./pytris.png",
        title: "Pythonで動くぷよぷよテトリスAI「py-tris」",
        content:
          "OSのAPI等も駆使しつつ、実機上で実際に動くAIなので、人間と対戦することもできます。",
        href: LINK.PYTRIS,
        long: true,
      },
      {
        imageSrc: "./reversi.png",
        title: "Rust & Three.jsで動くリバーシAI",
        content:
          "ロジックの部分がRust and WebAssembly、UIの部分がReact & Three.jsで動く対戦型リバーシAIです。そこそこ強いです。",
        href: LINK.REVERSI,
      },
      {
        imageSrc: "./pycaml.png",
        title: "OCamlサブセット言語用コンパイラ「pycaml」",
        content:
          "プログラム言語理論に基づく最適化も実装された、PythonとOCamlによるコンパイラです。",
        href: LINK.PYCAML,
      },
    ],
    internship: [
      {
        title: "株式会社ベンド　フルスタックエンジニア",
        href: LINK.BEND,
        period: {
          start: "2020/12",
          end: "Present",
        },
        children: (
          <>
            <p>
              フロントエンドを中心に、バックエンド・サーバー等広く業務に携わっています。
            </p>
            <ul>
              <li>
                ゲームライクな2DコミュニケーションWebアプリ「MetaLife」の開発
              </li>
              <li>「資格Times」「学びTimes」の運用</li>
            </ul>
          </>
        ),
      },
      {
        title: "株式会社松尾研究所　MLエンジニア",
        href: LINK.MATSUO,
        period: {
          start: "2023/07",
          end: "Present",
        },
        children: <></>,
      },
      {
        title: "チームラボ株式会社　フロントエンドエンジニア",
        href: LINK.TEAM_LAB,
        period: {
          start: "2023/02",
          end: "2023/03",
        },
        children: (
          <>
            <p>
              2週間の短期インターンに参加し、フロントエンドサイドの開発チームに参加して、実務に取り組みました。
            </p>
            <ul>
              <li>Webサイトのシステムリプレース</li>
              <li>内部・外部のミーティング参加</li>
              <li>新規アプリのWebView実装</li>
            </ul>
          </>
        ),
      },
    ],
    partTimeJob: [
      {
        title: "株式会社Cygames",
        href: LINK.CYGAMES,
        period: {
          start: "2021/04",
          end: "Present",
        },
      },
    ],
    personal: [
      {
        title: "ぷよぷよテトリスAI",
        href: LINK.PYTRIS,
        children: (
          <>
            <p>
              大学の同期と、ゲームソフト「ぷよぷよテトリス」内で動く、AIを作成しました。
            </p>
            <p>
              メモリ読み込みによる情報抽出
              <br />
              →ルールベースのアルゴリズムによる動きの決定
              <br />
              →仮想コントローラーから入力
              <br />
              という流れで動きます。
            </p>
          </>
        ),
      },
      {
        title: "リバーシAI",
        href: LINK.REVERSI,
        children: (
          <>
            <p>
              ロジックの部分がRust and WebAssembly、UIの部分がReact &
              Three.jsで動く対戦型リバーシAIです。
            </p>
            <p>
              自分はオセロ初心者ですが、定石や経験則等を調べて、Botとして実現しました。
            </p>
            <p>
              <Link
                href={LINK.REVERSI_DEMO}
                target="_blank"
                rel="noopener noreferrer"
              >
                こちらのページ
              </Link>
              でDEMOをいじることができます。
            </p>
          </>
        ),
      },
      {
        title: "C言語のサブセット用のミニコンパイラ (WIP)",
        href: LINK.DCC,
        children: (
          <>
            <p>Rui Ueyamaさんの記事に沿って、</p>
            <p>
              C言語のサブセット言語をRISC-Vベースのアセンブリにコンパイルするコンパイラを、
            </p>
            <p>Rustで実装中です。</p>
          </>
        ),
      },
    ],
    educational: [
      {
        title: "OCamlのサブセット用のコンパイラ",
        href: LINK.PYCAML,
        children: (
          <>
            <p>
              チーム4人で課題プログラムを動かすCPUアーキテクチャを作る「CPU実験」の中で、
            </p>
            <p>
              コンパイラ係として、OCamlのサブセット言語のコンパイラを作成しました。
            </p>
            <p>PythonとOCamlで実装しました。</p>
          </>
        ),
      },
    ],
  },
  EN: {
    images: [
      {
        imageSrc: "./metalife.png",
        title: "2D Communication Tool ''MetaLife''",
        content:
          "I have been involved in all phases of the project, including conceptualization, requirements definition, design, implementation, and maintenance.",
        href: LINK.METALIFE,
      },
      {
        imageSrc: "./manabitimes.png",
        title: "Web Media ''Shikaku Times'' ''Manabi Times''",
        content:
          "I am responsible for both front and back-end implementation and maintenance of the websites and their CMS.",
        href: LINK.MANABITIMES,
      },
      {
        imageSrc: "./pytris.png",
        title: "Puyo Puyo Tetris AI Scratched in Python ''py-tris''",
        content:
          "This AI runs on the application using OS APIs and other tools. It is also capable of playing against humans in the application.",
        href: LINK.PYTRIS,
        long: true,
      },
      {
        imageSrc: "./reversi.png",
        title: "Reversi AI Scratched in Rust & Three.js",
        content:
          "Logic is implemented in Rust and WebAssembly, UI is implemented in React & Three.js. Reasonably strong.",
        href: LINK.REVERSI,
      },
      {
        imageSrc: "./pycaml.png",
        title: "Compiler for the Subset of OCaml ''pycaml''",
        content:
          "This compiler, built using Python and OCaml, incorporates optimizations based on programming language theory.",
        href: LINK.PYCAML,
      },
    ],
    internship: [
      {
        title: "Full Stack Engineer at Bend Inc.",
        href: LINK.BEND,
        period: {
          start: "2020/12",
          end: "Present",
        },
        children: (
          <>
            <p>
              My primary focus is on front-end development. I am also deeply
              involved in various tasks, including back-end and server
              management.
            </p>
            <ul>
              <li>
                Development of the game-like 2D communication web app,
                &apos;&apos;MetaLife&apos;&apos;
              </li>
              <li>
                Running &apos;&apos;Shikaku Times&apos;&apos;,
                &apos;&apos;Manabi Times&apos;&apos;
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "ML Engineer at Matsuo Institute Inc.",
        href: LINK.MATSUO,
        period: {
          start: "2023/07",
          end: "Present",
        },
        children: <></>,
      },
      {
        title: "Front-End Engineer at teamLab",
        href: LINK.TEAM_LAB,
        period: {
          start: "2023/02",
          end: "2023/03",
        },
        children: (
          <>
            <p>
              I participated in a two-week short-term internship and joined the
              front-end development team to work on practical tasks.
            </p>
            <ul>
              <li>System replacement of a website</li>
              <li>Participation in both internal and external meetings</li>
              <li>Webview implementation for a new app</li>
            </ul>
          </>
        ),
      },
    ],
    partTimeJob: [
      {
        title: "Cygames Inc.",
        href: LINK.CYGAMES,
        period: {
          start: "2021/04",
          end: "Present",
        },
      },
    ],
    personal: [
      {
        title: "Puyo Puyo Tetris AI",
        href: LINK.PYTRIS,
        children: (
          <>
            <p>
              I created an AI that runs in the &apos;&apos;Puyo Puyo
              Tetris&apos;&apos; game with my university classmates.
            </p>
            <p>
              It works as follows:
              <br />
              Information extraction by reading memory
              <br />
              → Movement decision by rule-based algorithm
              <br />→ Input via a virtual controller
            </p>
          </>
        ),
      },
      {
        title: "Reversi AI",
        href: LINK.REVERSI,
        children: (
          <>
            <p>
              Logic is implemented in Rust and WebAssembly, UI is implemented in
              React & Three.js.
            </p>
            <p>
              Although I am a very biginner in Reversi, I looked for established
              tactics and rules of thumb, etc., and realized them as a bot.
            </p>
            <p>
              You can play the DEMO in{" "}
              <Link
                href={LINK.REVERSI_DEMO}
                target="_blank"
                rel="noopener noreferrer"
              >
                this page
              </Link>
              .
            </p>
          </>
        ),
      },
      {
        title: "Mini-Compiler for the subset language of C-lang (WIP)",
        href: LINK.DCC,
        children: (
          <>
            <p>Along with Rui Ueyama&apos;s article,</p>
            <p>
              I am in the process of implementing a compiler in Rust that
              compiles a subset language of C-lang into a RISC-V based assembly.
            </p>
          </>
        ),
      },
    ],
    educational: [
      {
        title: "Compiler for the subset language of OCaml",
        href: LINK.PYCAML,
        children: (
          <>
            <p>
              In the &apos;&apos;CPU Experiment&apos;&apos;, in which a team of
              four people creates a CPU architecture to run a given program, in
              my role as a compiler developer, I built a compiler for the subset
              language of OCaml.
            </p>
            <p>I implemented this in Python and OCaml.</p>
          </>
        ),
      },
    ],
  },
} as const;

export default function SectionExperiences() {
  const { selectedData } = useSelectData(data);

  return (
    <div className={styles.sectionExperiences}>
      <TitleH1 title="Experiences" />

      <div className={styles.images}>
        {selectedData.images.map(
          (
            iter: {
              imageSrc: string;
              title: string;
              content: string;
              href: string;
              long: true | undefined;
            },
            index: number
          ) => {
            return (
              <ImageItem
                key={index}
                imageSrc={iter.imageSrc}
                title={iter.title}
                content={iter.content}
                href={iter.href}
                long={iter.long}
              />
            );
          }
        )}
      </div>

      <TitleH2 title="Internship" />
      {selectedData.internship.map(
        (
          iter: {
            title: string;
            href?: string;
            period: { start: string; end: string } | undefined;
            children: ReactNode;
          },
          index: number
        ) => {
          return (
            <HighlightedItem
              key={index}
              title={iter.title}
              href={iter.href}
              period={iter.period}
            >
              {iter.children}
            </HighlightedItem>
          );
        }
      )}

      <TitleH2 title="Part-Time Job" />
      {selectedData.partTimeJob.map(
        (
          iter: {
            title: string;
            href?: string;
            period: { start: string; end: string } | undefined;
          },
          index: number
        ) => {
          return (
            <HighlightedItem
              key={index}
              title={iter.title}
              href={iter.href}
              period={iter.period}
            ></HighlightedItem>
          );
        }
      )}

      <TitleH2 title="Personal Projects" />
      {selectedData.personal.map(
        (
          iter: {
            title: string;
            href?: string;
            children: ReactNode;
          },
          index: number
        ) => {
          return (
            <HighlightedItem key={index} title={iter.title} href={iter.href}>
              {iter.children}
            </HighlightedItem>
          );
        }
      )}

      <TitleH2 title="Educational Projects" />
      {selectedData.educational.map(
        (
          iter: {
            title: string;
            href?: string;
            children: ReactNode;
          },
          index: number
        ) => {
          return (
            <HighlightedItem key={index} title={iter.title} href={iter.href}>
              {iter.children}
            </HighlightedItem>
          );
        }
      )}
    </div>
  );
}
