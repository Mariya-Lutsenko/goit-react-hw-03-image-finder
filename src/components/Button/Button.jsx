import styles from './Button.module.css';
// import PropTypes from 'prop-types';

const Button = ({onClick}) => {
  return (
    <button type="button" className={styles.Button} onClick ={onClick}>
      Load more
    </button>
  );
};

export default Button;
