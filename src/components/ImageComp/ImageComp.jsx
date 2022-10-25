import { Avatar, Image as ChakraImage } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const ImageComp = ({ name, src = '', isPlayer = false, ...props }) => {
  const Component = isPlayer ? Avatar : ChakraImage;

  return (
    <Component
      w={isPlayer ? null : 100}
      src={src ? src : `${name}`}
      alt={isPlayer ? name : `${name} logo`}
      {...props}
    />
  );
};

ImageComp.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
  isPlayer: PropTypes.bool,
};

export default ImageComp;
