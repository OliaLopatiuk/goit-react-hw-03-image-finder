import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = props => {
  return (
    <ImageList>
      <ImageGalleryItem photos={props.photos} onClick={props.onClick} />
    </ImageList>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.array,
  onClick: PropTypes.func,
};
