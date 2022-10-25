import { Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Card from '@/components/Card/Card';
import ImageComp from '@/components/ImageComp/ImageComp';
import Link from '@/components/Link/Link';
import PlayerDetail from '@/components/PlayerDetail/PlayerDetails';

import { MESSAGES, PLAYER_IMAGE_URLS } from '@/constants';
import getImageUrl from '@/utils/getImageUrl';

const AVATAR_SIZE = '2xl';

const {
  teamPage: {
    player: {
      details: { position: POSITION_LABEL, number: NUMBER_LABEL },
    },
  },
} = MESSAGES;
const { playerIdTemplate, small: smallImage, fallback } = PLAYER_IMAGE_URLS;

const PlayerCard = ({ player }) => {
  const {
    person: { id, fullName },
    jerseyNumber,
    position: { name: positionName },
  } = player;

  const PlayerFallbackImg = () => (
    <ImageComp
      name="player avatar"
      src={fallback}
      isPlayer
      size={AVATAR_SIZE}
    />
  );

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
          src={imageUrl}
          isPlayer
          size={AVATAR_SIZE}
          icon={<PlayerFallbackImg />}
        />
        <Text fontSize={20} fontWeight="bold">
          {fullName}
        </Text>
        <Flex justify="space-between" w="full" textAlign="center">
          <PlayerDetail detailName={POSITION_LABEL} detail={positionName} />
          <PlayerDetail detailName={NUMBER_LABEL} detail={jerseyNumber} />
        </Flex>
      </Card>
    </Link>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.shape({
    person: PropTypes.shape({}),
    jerseyNumber: PropTypes.number,
    position: PropTypes.shape({}),
  }).isRequired,
};

export default PlayerCard;
