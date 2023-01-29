import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, id, openModal }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItem__image}
        src={webformatURL}
        alt=""
        onClick={() => openModal(id)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
