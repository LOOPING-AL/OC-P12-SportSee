import styles from "./SideBar.module.css";
import { imgNames } from "../../../assets";

/** SideBar */
const SideBar = () => (
  <div className={styles.main}>
    <div className={styles.imgs}>
      {imgNames.map((imgName, index) => (
        <img className={styles.img} src={imgName} alt={imgName} key={index} />
      ))}
    </div>

    <p className={styles.text}>Copiryght, SportSee 2020</p>
  </div>
);

export default SideBar;
