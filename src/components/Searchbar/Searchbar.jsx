import { Component } from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  render () {
    return (
        <header className={styles.Searchbar}>
          <form className={styles.SearchForm}>
            <button type="submit" className={styles.SearchForm__button}>
              <span className={styles.SearchForm__button__label}>Search</span>
            </button>

            <input
              className={styles.SearchForm__input}
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
    )
  }  
}

export default Searchbar;
