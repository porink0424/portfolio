import { LINK } from "@/constants/link";
import HighlightedItem from "../parts/HighlightedItem";
import ImageItem from "../parts/ImageItem";
import TitleH1 from "../parts/TitleH1";
import TitleH2 from "../parts/TitleH2";
import styles from "./SectionExperiences.module.scss";

export default function SectionExperiences() {
  return (
    <div className={styles.sectionExperiences}>
      <TitleH1 title="Experiences" />

      <div className={styles.images}>
        <ImageItem
          imageSrc="/metalife.png"
          title="2Dコミュニケーションツール「MetaLife」"
          content="構想、要件定義、設計、実装、保守全てのフェーズに参加しています。"
          href={LINK.METALIFE}
        />
        <ImageItem
          imageSrc="/manabitimes.png"
          title="Webメディア「資格Times」「学びTimes」"
          content="メディアサイトのみならず、CMSのフロント・バック両方の実装&保守を行なっています。"
          href={LINK.MANABITIMES}
        />
        <ImageItem
          imageSrc="/pytris.png"
          title="Pythonで動くぷよぷよテトリスAI「py-tris」"
          content="OSのAPI等も駆使しつつ、実機上で実際に動くAIなので、人間と対戦することもできます。"
          href={LINK.PYTRIS}
          long
        />
        <ImageItem
          imageSrc="/reversi.png"
          title="Rustで動くリバーシAI"
          content="マルチスレッドな実装を生かし、最終盤では全探索を行います。そこそこ強いです。"
          href={LINK.REVERSI}
        />
        <ImageItem
          imageSrc="/pycaml.png"
          title="OCamlサブセット言語用コンパイラ「pycaml」"
          content="プログラム言語理論に基づく最適化も実装された、PythonとOCamlによるコンパイラです。"
          href={LINK.PYCAML}
        />
      </div>

      <TitleH2 title="Internship" />
      <HighlightedItem
        title="株式会社ベンド　フルスタックエンジニア"
        period={{
          start: "2020/12",
          end: "Present",
        }}
      >
        <p>
          フロントエンドを中心に、バックエンド・サーバー等広く業務に携わっています。
        </p>
        <p>・ゲームライクな2DコミュニケーションWebアプリ「MetaLife」の開発</p>
        <p>・「資格Times」「学びTimes」の運用</p>
      </HighlightedItem>
      <HighlightedItem
        title="チームラボ株式会社　フロントエンドエンジニア"
        period={{
          start: "2023/02",
          end: "2023/03",
        }}
      >
        <p>
          2週間の短期インターンに参加し、フロントエンドサイドの開発チームに参加して、実務に取り組みました。
        </p>
        <p>・Webサイトのシステムリプレース</p>
        <p>・内部・外部のミーティング参加</p>
        <p>・新規アプリのWebView実装</p>
      </HighlightedItem>

      <TitleH2 title="Personal Projects" />
      <HighlightedItem title="ぷよぷよテトリスAI">
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
      </HighlightedItem>
      <HighlightedItem title="リバーシAI">
        <p>マルチスレッドで動くリバーシの対戦用AIを作成しました。</p>
        <p>CUIだけでは寂しかったので、簡易的なGUIも追加しました。</p>
        <p>ReplitでDEMOをいじれます。</p>
      </HighlightedItem>
      <HighlightedItem title="C言語のサブセット用のミニコンパイラ (WIP)">
        <p>Rui Ueyamaさんの記事に沿って、</p>
        <p>
          C言語のサブセット言語をRISC-Vベースのアセンブリにコンパイルするコンパイラを、
        </p>
        <p>Rustで実装中です。</p>
      </HighlightedItem>

      <TitleH2 title="Educational Projects" />
      <HighlightedItem title="OCamlのサブセット用のコンパイラ">
        <p>
          チーム4人で課題プログラムを動かすCPUアーキテクチャを作る「CPU実験」の中で、
        </p>
        <p>
          コンパイラ係として、OCamlのサブセット言語のコンパイラを作成しました。
        </p>
        <p>PythonとOCamlで実装しました。</p>
      </HighlightedItem>
    </div>
  );
}
