import { Component } from 'react';
import styles from './App.module.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { fetchPicturesQuery } from '../services/api';
import Modal from './Modal/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader/Loader';

export default class App extends Component {
  state = {
    search: '',
    pictures: [],
    loading: false,
    error: null,
    page: 1,
    totalHits: null,
    showModal: false,
    largeImage: '',
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchPictures();
    }
  }

  async fetchPictures() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const data = await fetchPicturesQuery(search, page);
      data.hits.length === 0
        ? toast.error('Nothing found')
        : this.setState(({ pictures }) => ({
            pictures: [...pictures, ...data.hits],
          }));
      this.setState({ totalHits: data.totalHits });
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
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  openModal = index => {
    this.setState(({ pictures }) => ({
      showModal: true,
      largeImage: pictures[index].largeImageURL,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { largeImage, pictures, loading, error, totalHits, showModal } =
      this.state;
    const { searchPictures, loadMore, openModal, toggleModal } = this;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={searchPictures} />
        {pictures.length !== 0 && (
          <ImageGallery pictures={pictures} openModal={openModal} />
        )}
        {showModal && (
          <Modal toggleModal={toggleModal} largeImage={largeImage} />
        )}

        {loading && <Loader/>}
        {error && <p>Something goes wrong</p>}
        {totalHits > pictures.length && <Button onClick={loadMore} />}
        <ToastContainer autoClose={1500} />
      </div>
    );
  }
}
