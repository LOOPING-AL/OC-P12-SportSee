import {
  Activity,
  AverageSessions,
  Performance,
  User,
} from "../../../ts/type/types";
import styles from "./Home.module.css";
import HomeMainInfoGraph from "./HomeMainInfoGraph";
import HomeMainInfoKeyData from "./HomeMainInfoKeyData";

interface Props {
  user: User | undefined;
  performance: Performance | undefined;
  activity: Activity | undefined;
  averageSessions: AverageSessions | undefined;
}

const HomeMainInfo = ({ data }: { data: Props }): JSX.Element => {
  return (
    <section className={styles.info}>
      <HomeMainInfoGraph />
      <HomeMainInfoKeyData user={data.user} />
    </section>
  );
};

export default HomeMainInfo;
