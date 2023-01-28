import { Component } from 'react';
import styles from './App.module.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { searchPictures } from '../services/api';
// import { ToastContainer, toast } from 'react-toastify';

export default class App extends Component {
  state = {
    search: '',
    pictures: [],
    loading: false,
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchPictures();
    }
  }

  async fetchPictures() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const data = await searchPictures(search, page);
      this.setState(({ pictures }) => ({
        pictures: [...pictures, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  searchPictures = ({ search }) => {
    this.setState({ search, pictures: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { pictures, loading, error } = this.state;
    const { searchPictures, loadMore } = this;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={searchPictures} />
        <ImageGallery pictures={pictures} />

        {loading && <p>...Loading</p>}
        {error && <p>Something goes wrong</p>}
        {pictures.length >= 12 && <Button onClick={loadMore} />}
      </div>
    );
  }
}
