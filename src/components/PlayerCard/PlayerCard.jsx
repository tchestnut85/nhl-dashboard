import { Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Card from '@/components/Card/Card';
import ImageComp from '@/components/ImageComp/ImageComp';
import Link from '@/components/Link/Link';
import PlayerCardDetails from './PlayerCardDetails';
import PlayerFallbackImage from './PlayerFallbackImage';

import { MESSAGES, PLAYER_IMAGE_URLS, AVATAR_SIZE } from '@/constants';
import getImageUrl from '@/utils/getImageUrl';

const {
  teamPage: {
    player: {
      details: { position: POSITION_LABEL, number: NUMBER_LABEL },
    },
  },
} = MESSAGES;
const { playerIdTemplate, small: smallImage, fallback } = PLAYER_IMAGE_URLS;

const PlayerCard = ({ player, teamId }) => {
  const {
    person: { id, fullName },
    jerseyNumber,
    position: { name: positionName },
  } = player;

  // TODO - getting the following error: Failed to load resource: net::ERR_CERT_DATE_INVALID
  const imageUrl = getImageUrl(id, smallImage, playerIdTemplate);

  return (
    <Link href={`/players/${id}`} isOverlay m={5}>
      <Card
        direction="column"
        alignItems="center"
        justify="space-around"
        h="350px"
        w="250px"
      >
        <ImageComp
          name={fullName}
          // src={imageUrl} // see above TODO regarding error
          isPlayer
          size={AVATAR_SIZE.default}
          icon={<PlayerFallbackImage />}
        />
        <Text fontSize={20} fontWeight="bold">
          {fullName}
        </Text>
        <Flex justify="space-between" w="full" textAlign="center">
          <PlayerCardDetails
            detailName={POSITION_LABEL}
            detail={positionName}
          />
          <PlayerCardDetails detailName={NUMBER_LABEL} detail={jerseyNumber} />
        </Flex>
      </Card>
    </Link>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.shape({
    person: PropTypes.shape({}),
    jerseyNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    position: PropTypes.shape({}),
  }).isRequired,
  teamId: PropTypes.string.isRequired,
};

export default PlayerCard;
