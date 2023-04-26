import HomeMainInfo from "./HomeMainInfo";
import HomeMainTop from "./HomeMainTop";
import styles from "./Home.module.css";
import { useAllData } from "../../../api/services/user";

const HomeMain = () => {
  const { user, activity, averageSessions, performance } = useAllData(12);
  const data = { user, activity, averageSessions, performance };

  return (
    <div className={styles.main}>
      <HomeMainTop user={user} />
      <HomeMainInfo data={data} />
    </div>
  );
};
export default HomeMain;
