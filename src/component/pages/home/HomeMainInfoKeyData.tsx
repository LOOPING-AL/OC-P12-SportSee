import { User } from "../../../ts/type/types";
import styles from "./Home.module.css";
import { Energy, Chicken, Apple, Cheeseburger } from "../../../assets/index";
import { KeyData } from "../../index";

const HomeMainInfoKeyData = ({ user }: { user: User | undefined }) => (
  <div className={styles.keyData}>
    <KeyData
      img={Energy}
      number={user?.data.keyData.calorieCount}
      unit="kCal"
      info="Calories"
    />
    <KeyData
      img={Chicken}
      number={user?.data.keyData.proteinCount}
      unit="g"
      info="Proteines"
    />
    <KeyData
      img={Apple}
      number={user?.data.keyData.carbohydrateCount}
      unit="g"
      info="Glucides"
    />
    <KeyData
      img={Cheeseburger}
      number={user?.data.keyData.lipidCount}
      unit="g"
      info="Lipides"
    />
  </div>
);

export default HomeMainInfoKeyData;
