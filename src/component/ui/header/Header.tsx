import { Logo, navItems } from "../../../assets/index";
import styles from "./Header.module.css";

/** Headers */
const Header = () => (
  <header className={styles.main}>
    <img src={Logo} alt="logo" className={styles.img} />
    <ul className={styles.items}>
      {navItems.map((item, index) => (
        <li key={index} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  </header>
);

export default Header;
