import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <NavLink exact to={"/"} className={styles.link}>
          <MenuLink to={"/"}>Inicio</MenuLink>
        </NavLink>
        <NavLink exact to={"/sobremim"} className={styles.link}>
        <MenuLink to={"/sobremim"}>Sobre Mim</MenuLink>  
        </NavLink>
        
      </nav>
    </header>
  );
}
