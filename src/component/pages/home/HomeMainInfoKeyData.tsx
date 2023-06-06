import { Apple, Cheeseburger, Chicken, Energy } from "../../../assets/index";
import { User } from "../../../ts/type/types";
import { KeyData, Loader } from "../../index";
import styles from "./Home.module.css";

/**
 * Show all key data
 * @param {import("../../../ts/type/types").User | undefined} user
 * @returns {JSX.Element} JSX.Element
 */
const HomeMainInfoKeyData = ({ user }: { user: User | undefined }) => {
  const keys = [
    {
      img: Energy,
      number: user?.data.keyData.calorieCount,
      unit: "kCal",
      info: "Calories",
    },
    {
      img: Chicken,
      number: user?.data.keyData.proteinCount,
      unit: "g",
      info: "Proteines",
    },
    {
      img: Apple,
      number: user?.data.keyData.carbohydrateCount,
      unit: "g",
      info: "Glucides",
    },
    {
      img: Cheeseburger,
      number: user?.data.keyData.lipidCount,
      unit: "g",
      info: "Lipides",
    },
  ];

  return (
    <div className={styles.keyData}>
      {keys.map((key, index) => (
        <div key={index}>
          {user ? (
            <KeyData
              img={key.img}
              number={key.number}
              unit={key.unit}
              info={key.info}
            />
          ) : (
            <Loader key={index} />
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeMainInfoKeyData;
