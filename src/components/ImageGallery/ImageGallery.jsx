import React, { Component } from 'react';
import propTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import css from './imageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    isShowModal: false,
    largeImage: '',
    alt: '',
  };

  showModal = (largeImage, alt) => {
    this.setState({ isShowModal: true, largeImage, alt });
  };

  hideModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { isShowModal, largeImage, alt } = this.state;
    const { hideModal, showModal } = this;

    return (
      <>
        {isShowModal && (
          <Modal src={largeImage} alt={alt} onClick={hideModal} />
        )}

        <ul className={css.imageGallery}>
          {this.props.pictures.map(
            ({ id, webformatURL, tags, largeImageURL }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  src={webformatURL}
                  alt={tags}
                  largeImage={largeImageURL}
                  isShowModal={showModal}
                />
              );
            }
          )}
        </ul>
      </>
    );
  }
}

ImageGallery.propTypes = {
  pictures: propTypes.arrayOf(propTypes.object).isRequired,
  page: propTypes.number.isRequired,
};