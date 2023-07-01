import React, { useState } from 'react';
import propTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import css from './imageGallery.module.css';

const ImageGallery = ({ pictures }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [alt, setAlt] = useState('');

  const showModal = (largeImage, alt) => {
    setIsShowModal(true);
    setLargeImage(largeImage);
    setAlt(alt);
  };

  const hideModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      {isShowModal && <Modal src={largeImage} alt={alt} onClick={hideModal} />}

      <ul className={css.imageGallery}>
        {pictures.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              src={webformatURL}
              alt={tags}
              largeImage={largeImageURL}
              isShowModal={showModal}
            />
          );
        })}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  pictures: propTypes.arrayOf(propTypes.object).isRequired,
  page: propTypes.number.isRequired,
};

export default ImageGallery;