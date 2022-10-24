import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';

const Heading = ({ message, ...props }) => (
  <Text as="h2" fontSize="4xl" mb={5} {...props}>
    {message}
  </Text>
);

Heading.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Heading;
