import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import css from './modal.module.css';

const Modal = ({ src, alt, onClick }) => {

  const closeModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      onClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    window.addEventListener('mousedown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
      window.removeEventListener('mousedown', closeModal);
    };
  }, []);

  return (
    <div className={css.wrapper} onClick={closeModal}>
      <div className={css.modal_window}>
        <img src={src} alt={alt} width="800" height="600" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export default Modal;