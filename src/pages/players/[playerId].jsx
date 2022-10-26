import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import PageHeader from '@/components/PageLayout/PageHeader';
import PlayerProfileCard from '@/components/PlayerProfile/PlayerProfileCard';
import PlayerStats from '@/components/PlayerProfile/PlayerStats';

const Player = () => {
  const teamId = useSelector(
    state => state.player.currentPlayer.currentTeam?.id,
  );

  return (
    <Flex direction="column" gap="100px" w="full" alignItems="center">
      <PageHeader backButtonHref={`/teams/${teamId}`}>
        <PlayerProfileCard />
      </PageHeader>
      <PlayerStats />
    </Flex>
  );
};

export default Player;
