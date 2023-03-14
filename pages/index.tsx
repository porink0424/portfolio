import TopHeader from "@/components/sections/TopHeader";
import { LanguageProvider } from "@/contexts/Language.context";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <>
      <LanguageProvider>
        <section className={styles.topHeader}>
          <TopHeader />
        </section>
      </LanguageProvider>
    </>
  );
}
