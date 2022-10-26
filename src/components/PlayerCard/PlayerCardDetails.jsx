import { Badge, Flex, Text, Divider } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const PlayerCardDetails = ({
  detailName,
  detail,
  hasBoldLabel = true,
  isBadge = false,
  badgeColor = '',
  ...props
}) => {
  const DetailComponent = isBadge ? Badge : Text;

  return (
    <Flex
      direction="column"
      justify="space-between"
      alignItems="center"
      gap={1}
      fontSize={16}
      {...props}
    >
      <Text fontWeight={hasBoldLabel ? 'bold' : 'normal'}>{detailName}</Text>
      <Divider w="60px" />
      <DetailComponent
        colorScheme={badgeColor}
        variant="solid"
        {...(isBadge ? { fontSize: '16px' } : null)}
      >
        {detail}
      </DetailComponent>
    </Flex>
  );
};

PlayerCardDetails.propTypes = {
  detailName: PropTypes.string.isRequired,
  detail: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  hasBoldLabel: PropTypes.bool,
  isBadge: PropTypes.bool,
  badgeColor: PropTypes.string,
};

export default PlayerCardDetails;
