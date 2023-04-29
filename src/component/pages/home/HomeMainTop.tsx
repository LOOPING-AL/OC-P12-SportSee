import { User } from "../../../ts/type/types";
import { styles } from "./index";

const HomeMainTop = ({ user }: { user: User | undefined }) => {
  const firstName = user?.data.userInfos.firstName;

  return (
    <>
      <h1 className={styles.top_title}>
        Bonjour <span className={styles.top_name}>{firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
    </>
  );
};
export default HomeMainTop;
