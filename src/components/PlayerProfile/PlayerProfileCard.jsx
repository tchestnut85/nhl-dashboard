import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/react';

import Heading from '@/components/Heading/Heading';
import ImageComp from '@/components/ImageComp/ImageComp';
import Card from '@/components/Card/Card';
import PageHeaderSkeleton from '@/components/PageLayout/PageHeaderSkeleton';
import PlayerFallbackImage from '@/components/PlayerCard/PlayerFallbackImage';
import PlayerCardDetails from '@/components/PlayerCard/PlayerCardDetails';

import { getSinglePlayer } from '@/redux/players';
import { PLAYER_IMAGE_URLS, AVATAR_SIZE, MESSAGES } from '@/constants';
import getImageUrl from '@/utils/getImageUrl';

const {
  playerPage: { labels },
} = MESSAGES;

const PlayerProfileCard = () => {
  const {
    query: { playerId },
    isReady,
  } = useRouter();
  const dispatch = useDispatch();
  const player = useSelector(state => state.player.currentPlayer);

  const containerSize = { w: '500px', h: '200px' };

  useEffect(() => {
    if (!isReady) return;
    dispatch(getSinglePlayer(playerId));
  }, [isReady, playerId]); // eslint-disable-line react-hooks/exhaustive-deps

  // if (!Object.keys(player).length) return null;

  return (
    <Card
      bg="lightslategray"
      color="white"
      wrap="wrap"
      alignContent="center"
      {...containerSize}
    >
      {!Object.keys(player).length ? (
        <PageHeaderSkeleton />
      ) : (
        <Flex
          w="full"
          gap={5}
          my={5}
          justify="space-around"
          alignItems="center"
        >
          <ImageComp
            name={player.fullName}
            src={getImageUrl(
              playerId,
              PLAYER_IMAGE_URLS.med,
              PLAYER_IMAGE_URLS.playerIdTemplate,
            )}
            isPlayer
            size={AVATAR_SIZE.default}
            icon={<PlayerFallbackImage />}
          />
          <Flex direction="column" gap={5}>
            <Heading message={player?.fullName} mb="0" fontWeight="bold" />
            <Flex gap={10} justify="space-evenly">
              <PlayerCardDetails
                detailName={labels.team}
                detail={player.currentTeam.name}
              />
              <PlayerCardDetails
                detailName={labels.position}
                detail={player.primaryPosition.name}
              />
            </Flex>
          </Flex>
        </Flex>
      )}
    </Card>
  );
};

export default PlayerProfileCard;
