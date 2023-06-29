import React, { Component } from 'react';
import fetchImages from 'services/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    pictures: [],
    page: 1,
    error: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.makeImages();
    }
  }

  async makeImages() {
    this.setState({ isLoading: true });

    try {
      const responseApi = await fetchImages(
        this.state.query,
        this.state.page
      );

       const selectedProperties = responseApi.hits.map(
        ({ id, webformatURL, largeImageURL, tags }) => {
          return { id, webformatURL, largeImageURL, tags };
        }
      );

      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...selectedProperties],
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleFormSubmit = searchQuery => {
    if (this.state.query !== searchQuery) {
      this.setState({ query: searchQuery, pictures: [], page: 1 });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { query, pictures, page, isLoading } = this.state;
    const isShowGallery = pictures.length > 0 && query;
    const isShowButton = isShowGallery && !isLoading && !(pictures.length % 12);

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {isShowGallery && <ImageGallery pictures={pictures} page={page} />}
        {isShowButton && <Button onClick={this.handleLoadMore} />}
        {isLoading && <Loader />}
      </>
    );
  }
}