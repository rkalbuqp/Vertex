import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/Images/logo.png";
import styles from "./VertexButton.module.css";

const VertexButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className={styles["VertexButton"]} onClick={() => navigate("/")}>
        <img src={logo} width="250" className={styles["LogoTipe"]} />
      </button>
    </>
  );
};

export default VertexButton;
