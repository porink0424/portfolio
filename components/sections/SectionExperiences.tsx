import { LINK } from "@/constants/link";
import useSelectData from "@/hooks/useSelectData";
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
        imageSrc: "/metalife.png",
        title: "2Dコミュニケーションツール「MetaLife」",
        content:
          "構想、要件定義、設計、実装、保守全てのフェーズに参加しています。",
        href: LINK.METALIFE,
      },
      {
        imageSrc: "/manabitimes.png",
        title: "Webメディア「資格Times」「学びTimes」",
        content:
          "メディアサイトのみならず、CMSのフロント・バック両方の実装&保守を行なっています。",
        href: LINK.MANABITIMES,
      },
      {
        imageSrc: "/pytris.png",
        title: "Pythonで動くぷよぷよテトリスAI「py-tris」",
        content:
          "OSのAPI等も駆使しつつ、実機上で実際に動くAIなので、人間と対戦することもできます。",
        href: LINK.PYTRIS,
        long: true,
      },
      {
        imageSrc: "/reversi.png",
        title: "Rustで動くリバーシAI",
        content:
          "マルチスレッドな実装を生かし、最終盤では全探索を行います。そこそこ強いです。",
        href: LINK.REVERSI,
      },
      {
        imageSrc: "/pycaml.png",
        title: "OCamlサブセット言語用コンパイラ「pycaml」",
        content:
          "プログラム言語理論に基づく最適化も実装された、PythonとOCamlによるコンパイラです。",
        href: LINK.PYCAML,
      },
    ],
    internship: [
      {
        title: "株式会社ベンド　フルスタックエンジニア",
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
        title: "チームラボ株式会社　フロントエンドエンジニア",
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
    personal: [
      {
        title: "ぷよぷよテトリスAI",
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
        children: (
          <>
            <p>マルチスレッドで動くリバーシの対戦用AIを作成しました。</p>
            <p>CUIだけでは寂しかったので、簡易的なGUIも追加しました。</p>
            <p>ReplitでDEMOをいじれます。</p>
          </>
        ),
      },
      {
        title: "C言語のサブセット用のミニコンパイラ (WIP)",
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
        imageSrc: "/metalife.png",
        title: "2D Communication Tool ''MetaLife''",
        content:
          "I have been involved in all phases of the project, including conceptualization, requirements definition, design, implementation, and maintenance.",
        href: LINK.METALIFE,
      },
      {
        imageSrc: "/manabitimes.png",
        title: "Web Media ''Shikaku Times'' ''Manabi Times''",
        content:
          "I am responsible for both front and back-end implementation and maintenance of not only the Web site itself, but also the CMS.",
        href: LINK.MANABITIMES,
      },
      {
        imageSrc: "/pytris.png",
        title: "PuyoPuyo Tetris AI Scratched in Python ''py-tris''",
        content:
          "Utilizing OS APIs and other tools, this AI runs on the actual application. It is also capable of playing against humans in the application.",
        href: LINK.PYTRIS,
        long: true,
      },
      {
        imageSrc: "/reversi.png",
        title: "Reversi AI Scratched in Rust",
        content:
          "Thanks to a multithreaded implementation, it performs a complete search in the endgame. Reasonably strong.",
        href: LINK.REVERSI,
      },
      {
        imageSrc: "/pycaml.png",
        title: "Compiler for the Subset of OCaml ''pycaml''",
        content:
          "This compiler, built using Python and OCaml, incorporates optimizations based on programming language theory.",
        href: LINK.PYCAML,
      },
    ],
    internship: [
      {
        title: "Full Stack Engineer at Bend Inc.",
        period: {
          start: "2020/12",
          end: "Present",
        },
        children: (
          <>
            <p>
              My primary focus is on front-end development, but I am also deeply
              involved in a wide range of tasks, including back-end and server
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
        title: "Front-End Engineer at teamLab",
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
              <li>System replacement of a web site</li>
              <li>Participation in both internal and external meetings</li>
              <li>Webview implementation for a new app</li>
            </ul>
          </>
        ),
      },
    ],
    personal: [
      {
        title: "Puyopuyo Tetris AI",
        children: (
          <>
            <p>
              I created an AI that runs in the &apos;&apos;Puyopuyo
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
        children: (
          <>
            <p>I created a multithreaded AI for Reversi.</p>
            <p>I also added a simple GUI since CUI alone was boring.</p>
            <p>You can play the DEMO in Replit.</p>
          </>
        ),
      },
      {
        title: "Mini-Compiler for the subset language of C-lang (WIP)",
        children: (
          <>
            <p>Along with the Rui Ueyama&apos;s article,</p>
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
        children: (
          <>
            <p>
              In the &apos;&apos;CPU Experiment&apos;&apos;, in which a team of
              four people create a CPU architecture to run a given program, in
              my role as a developer of a compiler, I built a compiler for the
              subset language of OCaml.
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
            period: { start: string; end: string } | undefined;
            children: ReactNode;
          },
          index: number
        ) => {
          return (
            <HighlightedItem
              key={index}
              title={iter.title}
              period={iter.period}
            >
              {iter.children}
            </HighlightedItem>
          );
        }
      )}

      <TitleH2 title="Personal Projects" />
      {selectedData.personal.map(
        (
          iter: {
            title: string;
            children: ReactNode;
          },
          index: number
        ) => {
          return (
            <HighlightedItem key={index} title={iter.title}>
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
            children: ReactNode;
          },
          index: number
        ) => {
          return (
            <HighlightedItem key={index} title={iter.title}>
              {iter.children}
            </HighlightedItem>
          );
        }
      )}
    </div>
  );
}
