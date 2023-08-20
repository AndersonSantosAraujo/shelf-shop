import { IBuyButton } from "../../interfaces";
import styles from "./BuyButton.module.scss";

const BuyButton = ({ add, setAdd }: IBuyButton) => {
  return (
    <a
      href="#"
      className={`${styles["button"]} ${add ? styles["active"] : ""}`}
      onClick={() => setAdd(!add)}
    >
      {add ? "Adicionado" : "Adicionar"}
    </a>
  );
};

export default BuyButton;
