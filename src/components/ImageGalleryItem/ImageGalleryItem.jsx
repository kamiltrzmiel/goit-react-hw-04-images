import React, { Component } from 'react';
import propTypes from 'prop-types';
import css from './imageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  static defaultProps = {
    src: '',
    alt: '',
    largeImage: '',
  };

  makeModal = () => {
    const { largeImage, alt } = this.props;
    this.props.isShowModal(largeImage, alt);
  };

  render() {
    const { src, alt } = this.props;

    return (
      <li className={css.imageGalleryItem}>
        <img src={src} alt={alt} onClick={this.makeModal} />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  largeImage: propTypes.string.isRequired,
  isShowModal: propTypes.func.isRequired,
};