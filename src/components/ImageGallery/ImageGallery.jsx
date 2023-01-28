import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({pictures}) => {
  return <ul className={styles.ImageGallery}>
    {pictures.map(({ id, webformatURL}) => (
      <li key={id}>
        <img src={webformatURL} alt="" />
      </li>
    ))}
  </ul>;
};

ImageGallery.defaultProps = {
    pictures: []
}

export default ImageGallery;
