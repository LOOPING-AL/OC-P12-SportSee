import { User } from "../../../ts/type/types";
import { Loader } from "../../index";
import { styles } from "./index";

const HomeMainTop = ({ user }: { user: User | undefined }) => {
  let firstName = user?.data.userInfos.firstName;

  return (
    <>
      <h1 className={styles.top_title}>
        Bonjour{" "}
        <span className={styles.top_name}>
          {firstName ? firstName : <Loader />}
        </span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
    </>
  );
};
export default HomeMainTop;
