import MainVisual from "@/components/sections/MailVisual";
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

      <section
        id={SECTION_DOM_ID[0]}
        className={styles.sectionAbout}
        ref={sectionAboutRef}
      >
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
      </section>

      <section
        id={SECTION_DOM_ID[1]}
        className={styles.sectionExperiences}
        ref={sectionExperiencesRef}
      >
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
      </section>

      <section
        id={SECTION_DOM_ID[2]}
        className={styles.sectionResearch}
        ref={sectionResearchRef}
      >
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
      </section>

      <section
        id={SECTION_DOM_ID[3]}
        className={styles.sectionHobby}
        ref={sectionHobbyRef}
      >
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
      </section>
    </>
  );
}
