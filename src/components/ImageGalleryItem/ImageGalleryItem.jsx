import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, index, openModal }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItem__image}
        src={webformatURL}
        alt=""
        onClick={() => openModal(index)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
