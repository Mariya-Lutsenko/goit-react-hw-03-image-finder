import { Component } from 'react';
import styles from './App.module.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import {searchPictures} from '../services/api'
// import { ToastContainer, toast } from 'react-toastify';

export default class App extends Component {
  state = {
    search: '',
    pictures: [],
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      this.setState({ loading: true });
      searchPictures(search)
        .then( data  => this.setState({ pictures: data.hits }))
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ loading: false }))
    }
  }

  searchPictures = ({ search }) => {
    this.setState({ search });
  };


  render() {
    const { pictures, loading, error } = this.state;
    const { searchPictures } = this;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={searchPictures} />
        <ImageGallery pictures={pictures} />

        {loading && <p>...Loading</p>}
        {error && <p>Something goes wrong</p>}
      </div>
    );
  }
}
