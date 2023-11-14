import React from 'react';
import styles from './CartModal.module.scss';
import Portal from '../Portal/Portal';

const BackDrop = ({ onHide }) => {
  return (
    <div
      className={styles.backdrop}
      onClick={onHide}
    />
  );
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const CartModal = ({ children, onHide }) => {
  return (
    <>
      <Portal destId='backdrop-root'>
        <BackDrop onHide={onHide} />
      </Portal>
      <Portal destId='overlay-root'>
        <ModalOverlay>{children}</ModalOverlay>
      </Portal>
    </>
  );
};

export default CartModal;
