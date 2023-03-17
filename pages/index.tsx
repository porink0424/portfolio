import MainVisual from "@/components/sections/MailVisual";
import SectionAbout from "@/components/sections/SectionAbout";
import SectionExperiences from "@/components/sections/SectionExperiences";
import SectionHobby from "@/components/sections/SectionHobby";
import SectionResearch from "@/components/sections/SectionResearch";
import TopHeader from "@/components/sections/TopHeader";
import { SECTION_DOM_ID } from "@/constants/section";
import useMainSection from "@/hooks/useMainSection";
import { useRef } from "react";
import styles from "./index.module.scss";

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

      <section className={styles.mainVisual}>
        <MainVisual />
      </section>

      <div className={styles.mainContainer}>
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
    </>
  );
}
