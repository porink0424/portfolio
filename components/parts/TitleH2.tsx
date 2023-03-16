import classNames from "classnames";
import styles from "./TitleH2.module.scss";

type Props = {
  title: string;
};

export default function TitleH2({ title }: Props) {
  return (
    <h2 className={classNames(styles.title, "_titleH2MarginLeft")}>{title}</h2>
  );
}
