import { Flex, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Card = ({ children, ...props }) => (
  <Flex boxShadow="lg" p="6" rounded="md" h="100%" {...props}>
    {children}
  </Flex>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
