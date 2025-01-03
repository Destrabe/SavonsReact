import React from "react";
import styles from "./styles.module.css";

const CartIcon = ({ quantity }) => {
  return (
    <button className={styles.btnCart}>
      <svg
        className={styles.iconCart}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 6h15l-1.5 9h-12L6 6H2V4h4zm12 13c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM8 19c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
      </svg>
      {quantity > 0 && (
        <span className={styles.cartBadge} data-quantity={quantity}>
          {quantity}
        </span>
      )}
    </button>
  );
};

export default CartIcon;
