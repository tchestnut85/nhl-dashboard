import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Card from '@/components/Card/Card';
import PlayerCard from '@/components/PlayerCard/PlayerCard';

const Players = () => {
  const players = useSelector(state => state.team.currentTeam?.roster);

  const {
    query: { teamId },
  } = useRouter();

  if (!players) return null;

  return (
    <Card
      w="70%"
      wrap="wrap"
      bg="lightgray"
      justify="space-around"
      alignItems="center"
    >
      {players.map(player => (
        <PlayerCard key={player.person.id} player={player} />
      ))}
    </Card>
  );
};

export default Players;
