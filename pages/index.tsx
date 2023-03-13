import TopHeader from "@/components/sections/TopHeader";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <>
      <section className={styles.topHeader}>
        <TopHeader />
      </section>
    </>
  );
}
