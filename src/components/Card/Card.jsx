import { Flex, Grid } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Card = ({ children, isGrid = false, ...props }) => {
  const CardComponent = isGrid ? Grid : Flex;

  return (
    <CardComponent
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
    </CardComponent>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  isGrid: PropTypes.bool,
};

export default Card;
