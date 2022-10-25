import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import PageHeader from '@/components/PageHeader/PageHeader';
import PlayerProfileCard from '@/components/PlayerCard/PlayerProfileCard';
import PlayerStatsCard from '@/components/PlayerStatsCard/PlayerStatsCard';

const Player = () => {
  const teamId = useSelector(
    state => state.player.currentPlayer.currentTeam?.id,
  );

  return (
    <Flex direction="column" gap="100px" w="full" alignItems="center">
      <PageHeader backButtonHref={`/teams/${teamId}`}>
        <PlayerProfileCard />
      </PageHeader>
      {/* <PlayerStatsCard /> */}
    </Flex>
  );
};
export default Player;
