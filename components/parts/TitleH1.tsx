import styles from "./TitleH1.module.scss";

type Props = {
  title: string;
};

export default function TitleH1({ title }: Props) {
  return <h1 className={styles.title}>{title}</h1>;
}
