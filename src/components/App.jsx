import { Component } from 'react';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';

export default class App extends Component {
  state = {
    pictures: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        'https://pixabay.com/api/?key=31909701-b05a4a73718479a7bf524b9e0&q=cat&page=1&&image_type=photo&orientation=horizontal&per_page=12'
      )
      .then(({ data }) => {
        this.setState({ pictures: data.hits, loading: false });
      });
    //   .catch(error =>  )
  }
  render() {
    const { pictures, loading } = this.state;
    const elements = pictures.map(({ id, webformatURL, largeImageURL }) => (
      <li key={id}>
        <img src={webformatURL} alt="" />
      </li>
    ));
    return (
        <>
        {loading && <p>...Loading</p>}
        <ul>{elements}</ul>;
        </>
    )
    
  }
}
