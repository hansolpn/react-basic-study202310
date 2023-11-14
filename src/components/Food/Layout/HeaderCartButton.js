import React, { useContext } from 'react';

import styles from './HeaderCartButton.module.scss';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ onShow }) => {
  const { button, icon, badge } = styles;
  const cartContext = useContext(CartContext);

  return (
    <button
      className={button}
      onClick={onShow}
    >
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{cartContext.items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
