import styles from "./KeyData.module.css";

const KeyData = ({
  img,
  number,
  unit,
  info,
}: {
  img: string;
  number: number | undefined;
  unit: string;
  info: string;
}) => {
  const style =
    info === "Calories"
      ? styles.red
      : info === "Proteines"
      ? styles.blue
      : info === "Glucides"
      ? styles.yellow
      : styles.pink;

  return (
    <div className={styles.card}>
      <img src={img} alt={img} className={`${styles.card_img} ${style}`} />

      <div className={styles.card_text}>
        <p className={styles.card_text_top}>
          {number}
          {unit}
        </p>

        <p className={styles.card_text_bottom}>{info}</p>
      </div>
    </div>
  );
};

export default KeyData;
