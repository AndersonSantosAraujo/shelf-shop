import styles from "./WishlistButton.module.scss";
import { IWishlistButton } from "../../interfaces";

const WishlistButton = ({ wishlist, setWishlist }: IWishlistButton) => {
  return (
    <button
      className={`${styles["button"]} ${wishlist ? styles["active"] : ""}`}
      onClick={() => setWishlist(!wishlist)}
    >
      Wishlist
    </button>
  );
};

export default WishlistButton;
