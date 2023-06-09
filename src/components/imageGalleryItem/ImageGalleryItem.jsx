import { Component } from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';
import Modal from 'components/modal';

class ImageGalleryItem extends Component {
  state = {
    statusModal: false,
  };

  toggleModal = () => {
    this.setState(({ statusModal }) => ({
      statusModal: !statusModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;
    return (
      <>
        <li className={css.imageGalleryItem}>
          <img
            className={css['imageGalleryItem-image']}
            src={webformatURL}
            alt=""
            onClick={this.toggleModal}
          ></img>
        </li>
        {this.state.statusModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.toggleModal}>
            <img src={largeImageURL} alt="largeImage" />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
