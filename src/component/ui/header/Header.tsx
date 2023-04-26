import styles from "./Header.module.css";
import logo from "../../../assets/img/logo/logo.png";

const navItems = ["Accueil", "Profil", "Réglages", "Communauté"];

const Header = () => (
  <header className={styles.main}>
    <img src={logo} alt="logo" className={styles.img} />
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
