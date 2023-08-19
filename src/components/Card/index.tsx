import { useState } from "react";
import styles from "./Card.module.scss";
import { ICard } from "../../interfaces";
import productImage from "../../assets/images/product-1.png";
import WishlistButton from "../WishlistButton";
import BuyButton from "../BuyButton";

const Card: React.FC<ICard> = ({ product }) => {
  const [wishlist, setWishlist] = useState(false);
  const [add, setAdd] = useState(false);

  return (
    <div className={styles["card"]}>
      <div className={styles["card__image-wrapper"]}>
        <WishlistButton />
        <img
          src={productImage}
          alt="Alt Text"
          title="Title Text"
          className={styles["card__image"]}
        />
      </div>
      <div className={styles["card__content-wrapper"]}>
        <p className={styles["card__name"]}>
          Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP,
          Gsync Série CRG50
        </p>
        <p className={styles["card__list-price"]}>R$ 2.813,99</p>
        <p className={styles["card__best-price"]}>R$ 2.599,00</p>
        <p className={styles["card__installments"]}>
          em até <strong>10x de R$ 259,90</strong> sem juros
        </p>
        <BuyButton />
      </div>
    </div>
  );
};

export default Card;
