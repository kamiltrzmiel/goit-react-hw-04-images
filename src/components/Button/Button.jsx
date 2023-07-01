import React from 'react';
import propTypes from 'prop-types';
import css from './button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={css.button} type="button" onClick={onClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default Button;