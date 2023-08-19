import React from "react";
import styles from "./WishlistButton.module.scss";
import HeartGray from "./Icons/HeartGray";

const WishlistButton = () => {
  return (
    <div className={styles["button"]}>
      <HeartGray />
    </div>
  );
};

export default WishlistButton;
