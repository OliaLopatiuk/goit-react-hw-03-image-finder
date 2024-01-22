import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Image, ImageContainer } from './ImageGalleryItem.styled';

export const ImageGalleryItem = props => {
  return props.photos.map(photo => {
    return (
      <li key={nanoid()}>
        <ImageContainer
          onClick={() => props.onClick(photo.largeImageURL, photo.tags)}
        >
          <Image src={photo.webformatURL} alt={photo.tags} loading="lazy" />
        </ImageContainer>
      </li>
    );
  });
};

ImageGalleryItem.propTypes = {
  photos: PropTypes.array,
  onClick: PropTypes.func,
};
