import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Card = ({ children, ...props }) => (
  <Flex
    boxShadow="lg"
    p="6"
    rounded="md"
    h="100%"
    bg="lightslategray"
    color="white"
    borderRadius="5"
    {...props}
  >
    {children}
  </Flex>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
