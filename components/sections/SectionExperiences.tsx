import { LINK } from "@/constants/link";
import ImageItem from "../parts/ImageItem";
import TitleH1 from "../parts/TitleH1";
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
    </div>
  );
}
