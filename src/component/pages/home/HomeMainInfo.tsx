import { AllData } from "../../../ts/type/types";
import { HomeMainInfoGraph, HomeMainInfoKeyData, styles } from "./index";

const HomeMainInfo = ({ data }: { data: AllData }): JSX.Element => (
  <section className={styles.info}>
    <HomeMainInfoGraph data={data} />
    <HomeMainInfoKeyData user={data.user} />
  </section>
);

export default HomeMainInfo;
