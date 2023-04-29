import { HomeMainTop, HomeMainInfo, styles } from "./index";
import { useAllData } from "../../../api/services/user";

const HomeMain = () => {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");

  const { user, activity, averageSessions, performance } = useAllData(
    Number(userId)
  );

  const data = { user, activity, averageSessions, performance };

  return (
    <div className={styles.main}>
      <HomeMainTop user={user} />
      <HomeMainInfo data={data} />
    </div>
  );
};

export default HomeMain;
