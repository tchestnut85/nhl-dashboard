import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/react';

import Heading from '@/components/Heading/Heading';
import ImageComp from '@/components/ImageComp/ImageComp';
import Card from '@/components/Card/Card';
import PageHeaderSkeleton from '@/components/PageHeader/PageHeaderSkeleton';
import PlayerCardDetails from './PlayerCardDetails';
import PlayerFallbackImage from './PlayerFallbackImage';

import { getSinglePlayer } from '@/redux/players';
import { MESSAGES, PLAYER_IMAGE_URLS, AVATAR_SIZE } from '@/constants';
import getImageUrl from '@/utils/getImageUrl';

const {
  playerPage: { age: AGE_LABEL, nationality: NATIONALITY_LABEL },
} = MESSAGES;

const PlayerProfileCard = () => {
  const {
    query: { playerId },
    isReady,
  } = useRouter();
  const dispatch = useDispatch();
  const player = useSelector(state => state.player.currentPlayer);

  const { currentTeam = {}, primaryPosition = {} } = player;

  const containerSize = { w: '500px', h: '200px' };

  useEffect(() => {
    if (!isReady) return;
    dispatch(getSinglePlayer(playerId));
  }, [playerId, isReady]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Card
      bg="lightslategray"
      color="white"
      wrap="wrap"
      alignContent="center"
      {...containerSize}
    >
      {!player ? (
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
            <Heading message={player.fullName} mb="0" fontWeight="bold" />
            <Flex gap={10}>
              <PlayerCardDetails
                detailName={currentTeam.name}
                detail={primaryPosition.name}
                hasBoldLabel={false}
              />
              <PlayerCardDetails
                detailName={`${AGE_LABEL}${player.currentAge}`}
                detail={`${NATIONALITY_LABEL}${player.nationality}`}
                hasBoldLabel={false}
              />
            </Flex>
          </Flex>
        </Flex>
      )}
    </Card>
  );
};

export default PlayerProfileCard;
