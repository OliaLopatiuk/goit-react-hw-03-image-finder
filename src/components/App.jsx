import { Component } from 'react';
import { PixabayAPIService } from './helpers/pixabay-api';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './LoadMoreButton/LoadMoreButton';
import { Grid } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';
import { Img, ModalButton, ImgContainer } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    photos: [],
    modalShown: false,
    status: 'idle',
    selectedImg: '',
    imgTags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ photos: [], status: 'loading' });
      this.fetchImages(this.state.query);
    }
  }

  fetchImages(query) {
    PixabayAPIService(this.state.query)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Error'));
      })
      .then(photos => {
        this.setState(prevState => {
          const photosUpdated = [...prevState.photos, ...photos.hits];
          return {
            photos: photosUpdated,
            status: 'fulfiled',
          };
        });
      });
  }

  handleSubmit = query => {
    this.setState({ query });
  };

  handleClick = () => {
    this.state.status = 'loading';
    this.fetchImages(this.state.query);
  };

  toggleModal = (img, tags) => {
    this.setState(state => ({
      modalShown: !this.state.modalShown,
      selectedImg: img,
      imgTags: tags,
    }));
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit}></SearchBar>
        <ImageGallery
          photos={this.state.photos}
          onClick={this.toggleModal}
        ></ImageGallery>
        {this.state.status === 'fulfiled' && (
          <Button onClick={this.handleClick}></Button>
        )}
        {this.state.status === 'loading' && (
          <Grid
            visible={true}
            height="50"
            width="50"
            color="grey"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{
              display: 'block',
              textAlign: 'center',
            }}
            wrapperClass="grid-wrapper"
          />
        )}
        {this.state.modalShown && (
          <Modal onClose={this.toggleModal}>
            <Img src={this.state.selectedImg} alt={this.state.tags} />
            {/* <ModalButton type="button" onClick={this.toggleModal}>
              Close
            </ModalButton> */}
          </Modal>
        )}
      </div>
    );
  }
}
