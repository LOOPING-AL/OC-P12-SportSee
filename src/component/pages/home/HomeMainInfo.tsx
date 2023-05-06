import { AllData } from "../../../ts/type/types";
import { HomeMainInfoGraph, HomeMainInfoKeyData, styles } from "./index";

/**
 * Show all key data
 * @param { import("../../../ts/type/types").AllData} data
 * @returns {JSX.Element} JSX.Element
 */
const HomeMainInfo = ({ data }: { data: AllData }) => (
  <section className={styles.info}>
    <HomeMainInfoGraph data={data} />
    <HomeMainInfoKeyData user={data.user} />
  </section>
);

export default HomeMainInfo;
