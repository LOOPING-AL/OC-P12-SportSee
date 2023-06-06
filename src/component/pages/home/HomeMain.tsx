import { HomeMainTop, HomeMainInfo, styles } from "./index";
import { getAllData } from "../../../api/services/callApi";
import { Loader } from "../../ui";
import { getUserId } from "../../../assets";

/**
 * @returns {JSX.Element} JSX.Element
 */
const HomeMain = () => {
  const userId = getUserId();

  let data = getAllData(Number(userId));

  return (
    <>
      {data.error ? (
        <div className={styles.loader}>
          <p>
            Il y a actuellement un problème avec le serveur merci d'essayer plus
            tard
          </p>
          <Loader />
        </div>
      ) : typeof data.user === "string" ? (
        <div className={styles.loader}>
          <p>Vous n'êtes pas correctement identifié</p>
          <Loader />
        </div>
      ) : (
        <div className={styles.main}>
          <HomeMainTop user={data.user} />

          <HomeMainInfo data={data} />
        </div>
      )}
    </>
  );
};

export default HomeMain;
