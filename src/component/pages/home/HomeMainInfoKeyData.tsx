import { User } from "../../../ts/type/types";
import styles from "./Home.module.css";
import energy from "../../../assets/img/icons/energy.png";
import chicken from "../../../assets/img/icons/chicken.png";
import apple from "../../../assets/img/icons/apple.png";
import cheeseburger from "../../../assets/img/icons/cheeseburger.png";

const HomeMainInfoKeyData = ({ user }: { user: User | undefined }) => {
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

  return (
    <div className={styles.keyData}>
      <KeyData
        img={energy}
        number={user?.data.keyData.calorieCount}
        unit="kCal"
        info="Calories"
      />
      <KeyData
        img={chicken}
        number={user?.data.keyData.proteinCount}
        unit="g"
        info="Proteines"
      />
      <KeyData
        img={apple}
        number={user?.data.keyData.carbohydrateCount}
        unit="g"
        info="Glucides"
      />
      <KeyData
        img={cheeseburger}
        number={user?.data.keyData.lipidCount}
        unit="g"
        info="Lipides"
      />
    </div>
  );
};
export default HomeMainInfoKeyData;
