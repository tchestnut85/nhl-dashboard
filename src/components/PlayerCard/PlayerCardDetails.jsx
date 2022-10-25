import { Flex, Text, Divider } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const PlayerCardDetails = ({ detailName, detail, hasBoldLabel = true }) => (
  <Flex
    direction="column"
    justify="space-between"
    alignItems="center"
    gap={1}
    fontSize={16}
  >
    <Text fontWeight={hasBoldLabel ? 'bold' : 'normal'}>{detailName}</Text>
    <Divider w="60px" />
    <Text>{detail}</Text>
  </Flex>
);

PlayerCardDetails.propTypes = {
  detailName: PropTypes.string.isRequired,
  detail: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  hasBoldLabel: PropTypes.bool,
};

export default PlayerCardDetails;
