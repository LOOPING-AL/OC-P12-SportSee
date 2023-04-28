import { AllData } from "../../../ts/type/types";
import styles from "./Home.module.css";
import HomeMainInfoGraph from "./HomeMainInfoGraph";
import HomeMainInfoKeyData from "./HomeMainInfoKeyData";

const HomeMainInfo = ({ data }: { data: AllData }): JSX.Element => {

  return (
    <section className={styles.info}>
      <HomeMainInfoGraph data={data} />
      <HomeMainInfoKeyData user={data.user} />
    </section>
  );
};

export default HomeMainInfo;
