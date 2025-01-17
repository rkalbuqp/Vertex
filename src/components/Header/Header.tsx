import VertexButton from "./Subcomponent/VertexButton/VertexButton";
import styles from "./Header.module.css";
import NavigationHeader from "./Subcomponent/NavigationHeader/NavigationHeader";

const Header = () => {
  return (
    <>
      <div className={styles["HeaderContainer"]}>
        <div className={styles["LogoTipe"]}>
          <VertexButton />
        </div>
        <div className={styles["header"]}>
          <NavigationHeader />
        </div>
      </div>
    </>
  );
};

export default Header;
