import { HomeMainTop, HomeMainInfo, styles } from "./index";
import { getAllData } from "../../../api/services/user";
import { Loader } from "../../ui";
import { getUserId } from "../../../assets";

/**
 * @returns {JSX.Element} JSX.Element
 */
const HomeMain = () => {
  const userId = getUserId();

  const data = getAllData(Number(userId));

  return (
    <>
      {typeof data.user !== "string" ? (
        <div className={styles.main}>
          <HomeMainTop user={data.user} />
          <HomeMainInfo data={data} />
        </div>
      ) : (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
    </>
  );
};

export default HomeMain;
