import React from "react";
import styles from "./styles.module.css";
import CartIcon from "./CartIcon";
import Heart from "./heart";

const Header = () => {
  return (
    <>
      <div className={styles.topbar}>
        <p>¡EN PROCESO!</p>
      </div>
      <header className={styles.mainmenu}>
        <div className={styles.logo}>
          <p>
            Velour<em>Naturale</em>
          </p>
        </div>
        <nav className={styles.barra}>
          <a href="/pages/inicio" className={styles.opcion}>
            Inicio
          </a>
          <a href="/pages/sobreNosotros" className={styles.opcion}>
            Sobre nosotros
          </a>
          <a href="/pages/servicios" className={styles.opcion}>
            Servicios
          </a>
          <a href="/pages/pagina2" className={styles.opcion}>
            Página 2
          </a>
        </nav>
        <div className={styles.usercontrols}>
          <a className={styles.opcion} href="#">
            Iniciar sesion
          </a>
          <Heart /> {}
          <CartIcon />
        </div>
      </header>
    </>
  );
};

export default Header;
