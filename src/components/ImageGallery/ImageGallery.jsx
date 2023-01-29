import styles from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ pictures, openModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {pictures.map(({ id, webformatURL }, index) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          index={index}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.defaultProps = {
  pictures: [],
};

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
