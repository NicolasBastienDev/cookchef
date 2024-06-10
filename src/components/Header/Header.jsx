{
  /* <i class="fa-solid fa-bars"></i> */
}
import styles from "./Header.module.scss";
import cookchef from "../../assets/images/cookchef.png";
import { useState } from "react";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";

function Header({ setPage }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <img
          onClick={() => setPage("homepage")}
          src={cookchef}
          alt="logo cookchef"
        />
      </div>
      <ul className={styles.headerList}>
        <button
          onClick={() => setPage("admin")}
          className="mr-5 btn btn-reverse-primary"
        >
          Ajouter une recette
        </button>
        <button className="mr-5 btn btn-reverse-primary mr-15">
          <i className="fa-solid fa-heart mr-5"></i>
          <span>Wish List</span>
        </button>
        <button className="btn btn-primary">connexion</button>
      </ul>
      <i
        className={`fa-solid fa-bars mr-15 ${styles.headerXs}`}
        onClick={() => setShowMenu(true)}
      ></i>
      {showMenu && (
        <>
          <div className="calc" onClick={() => setShowMenu(false)}></div>
          <HeaderMenu setPage={setPage} />
        </>
      )}
    </header>
  );
}

export default Header;
