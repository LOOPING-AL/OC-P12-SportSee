import styles from "./SideBar.module.css";
import meditation from "../../../assets/img/icons/meditation.png";
import swim from "../../../assets/img/icons/swim.png";
import bike from "../../../assets/img/icons/bike.png";
import dumbbell from "../../../assets/img/icons/dumbbell.png";

const imgNames = [meditation, swim, bike, dumbbell];

const Header = () => (
  <div className={styles.main}>
    <div className={styles.imgs}>
      {imgNames.map((imgName, index) => (
        <img className={styles.img} src={imgName} alt={imgName} key={index} />
      ))}
    </div>

    <p className={styles.text}>Copiryght, SportSee 2020</p>
  </div>
);

export default Header;
