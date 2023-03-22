import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import styles from "./MainVisual.module.scss";

export default function MainVisual() {
  const { smallerThanTablet } = useWindowSize();

  return (
    <>
      <div className={styles.mainVisual}>
        <div className={styles.imagewrapper}>
          <div className={styles.image}>
            <Image
              src={smallerThanTablet ? "/mainVisualSP.png" : "/mainVisual.png"}
              alt="main visual"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.belonging}>
            B4 student at
            <br />
            The University of Tokyo, Japan
          </p>
          <p className={styles.name}>Daichi KATO</p>
        </div>
      </div>

      <div className={styles.mainVisualMargin} />
    </>
  );
}
