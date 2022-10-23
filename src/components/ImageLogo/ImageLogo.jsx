import { Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const ImageLogo = ({ name, src = '', ...props }) => (
  <Image w={100} src={src ? src : `${name}`} alt={`${name} logo`} {...props} />
);

ImageLogo.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default ImageLogo;
