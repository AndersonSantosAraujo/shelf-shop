import { useState } from "react";
import styles from "./Card.module.scss";
import { ICard } from "../../interfaces";
import WishlistButton from "../WishlistButton";
import BuyButton from "../BuyButton";

const Card: React.FC<ICard> = ({ product }) => {
  const [wishlist, setWishlist] = useState(false);
  const [add, setAdd] = useState(false);

  const toBRL = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <a href="#" className={styles["card"]}>
      <div className={styles["card__image-wrapper"]}>
        <WishlistButton wishlist={wishlist} setWishlist={setWishlist} />
        <img
          src={product.image}
          alt={product.name}
          title={product.name}
          className={styles["card__image"]}
        />
      </div>
      <div className={styles["card__content-wrapper"]}>
        <p className={styles["card__name"]}>{product.name}</p>
        <p className={styles["card__list-price"]}>{toBRL(product.listPrice)}</p>
        <p className={styles["card__best-price"]}>{toBRL(product.bestPrice)}</p>
        <p className={styles["card__installments"]}>
          em até{" "}
          <strong>
            {product.numberInstallments}x de {toBRL(product.installmentsPrice)}
          </strong>{" "}
          sem juros
        </p>
        <BuyButton add={add} setAdd={setAdd} />
      </div>
    </a>
  );
};

export default Card;
