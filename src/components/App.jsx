import { Component } from 'react';
import styles from './App.module.css';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
// import { ToastContainer, toast } from 'react-toastify';

export default class App extends Component {
  state = {
    pictures: [],
    loading: false,
    error: null,
  };
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        'https://pixabay.com/api/?key=31909701-b05a4a73718479a7bf524b9e0&q=cat&page=1&&image_type=photo&orientation=horizontal&per_page=12'
      )
      .then(({ data }) => {
        this.setState({ pictures: data.hits });
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => this.setState({ loading: false }));
  }
  render() {
    const { pictures, loading, error } = this.state;
    const elements = pictures.map(({ id, webformatURL, largeImageURL }) => (
      <li key={id}>
        <img src={webformatURL} alt="" />
      </li>
    ));
    return (
      <div className={styles.App}>
        <Searchbar/>
        
        {loading && <p>...Loading</p>}
        {error && <p>Something goes wrong</p>}
        <ul>{elements}</ul>;
      </div>
    );
  }
}
