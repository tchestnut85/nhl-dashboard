import { Flex, Text, Divider } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const PlayerDetail = ({ detailName, detail }) => (
  <Flex
    direction="column"
    justify="space-between"
    alignItems="center"
    gap={1}
    fontSize={16}
  >
    <Text fontWeight="bold">{detailName}</Text>
    <Divider w="60px" />
    <Text>{detail}</Text>
  </Flex>
);

PlayerDetail.propTypes = {
  detailName: PropTypes.string.isRequired,
  detail: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default PlayerDetail;
