import BottomFooter from "@/components/sections/BottomFooter";
import MainVisual from "@/components/sections/MailVisual";
import SectionAbout from "@/components/sections/SectionAbout";
import SectionExperiences from "@/components/sections/SectionExperiences";
import SectionHobby from "@/components/sections/SectionHobby";
import SectionResearch from "@/components/sections/SectionResearch";
import TopHeader from "@/components/sections/TopHeader";
import { SECTION_DOM_ID } from "@/constants/section";
import useMainSection from "@/hooks/useMainSection";
import dynamic from "next/dynamic";
import { useRef } from "react";
import styles from "./index.module.scss";
const Canvas = dynamic(() => import("@/phaser/Canvas"), { ssr: false });

export default function Home() {
  const sectionAboutRef = useRef(null);
  const sectionExperiencesRef = useRef(null);
  const sectionResearchRef = useRef(null);
  const sectionHobbyRef = useRef(null);
  useMainSection([
    sectionAboutRef,
    sectionExperiencesRef,
    sectionResearchRef,
    sectionHobbyRef,
  ]);

  return (
    <>
      <section className={styles.topHeader}>
        <TopHeader />
      </section>

      <section id="mainVisual" className={styles.mainVisual}>
        <MainVisual />
      </section>

      <div id="mainContainer" className={styles.mainContainer}>
        <section
          id={SECTION_DOM_ID[0]}
          className={styles.sectionAbout}
          ref={sectionAboutRef}
        >
          <SectionAbout />
        </section>

        <section
          id={SECTION_DOM_ID[1]}
          className={styles.sectionExperiences}
          ref={sectionExperiencesRef}
        >
          <SectionExperiences />
        </section>

        <section
          id={SECTION_DOM_ID[2]}
          className={styles.sectionResearch}
          ref={sectionResearchRef}
        >
          <SectionResearch />
        </section>

        <section
          id={SECTION_DOM_ID[3]}
          className={styles.sectionHobby}
          ref={sectionHobbyRef}
        >
          <SectionHobby />
        </section>
      </div>

      <section className={styles.bottomFooter}>
        <BottomFooter />
      </section>

      <div id="canvas" className={styles.canvasWrapper}>
        <Canvas />
      </div>
    </>
  );
}
