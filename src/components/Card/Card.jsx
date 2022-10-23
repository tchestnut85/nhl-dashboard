import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Card = ({ children, ...props }) => (
  <Box boxShadow="lg" p="6" rounded="md" h="100%" {...props}>
    {children}
  </Box>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
