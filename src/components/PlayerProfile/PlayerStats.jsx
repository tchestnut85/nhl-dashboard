import { useSelector } from 'react-redux';

import Card from '@/components/Card/Card';
import PlayerCardDetails from '@/components/PlayerCard/PlayerCardDetails';

import { COLORS, MESSAGES } from '@/constants';

const {
  playerPage: { labels },
  yes: YES,
  no: NO,
} = MESSAGES;
const RIGHT = 'R';

const getCaptainStatus = (isCaptain, isAlternate) => {
  if (!isCaptain && !isAlternate) return NO;
  return isCaptain ? labels.captain : labels.alternate;
};

const getColor = bool => (bool ? COLORS.green : COLORS.red);

const PlayerStats = () => {
  const player = useSelector(state => state.player.currentPlayer);

  const {
    currentAge,
    primaryNumber,
    nationality,
    shootsCatches,
    captain,
    alternateCaptain,
    rookie,
  } = player;

  const stats = [
    { label: labels.age, value: currentAge },
    { label: labels.number, value: primaryNumber },
    { label: labels.nationality, value: nationality },
    {
      label: labels.shootsCatches,
      value: labels[shootsCatches === RIGHT ? 'rightHand' : 'leftHand'],
    },
    {
      label: labels.captainStatus,
      value: getCaptainStatus(captain, alternateCaptain),
      color: getColor(captain || alternateCaptain),
    },
    {
      label: labels.rookie,
      value: rookie ? YES : NO,
      color: getColor(rookie),
    },
  ];

  if (!Object.keys(player).length) return null;

  return (
    <Card
      isGrid
      w="70%"
      wrap="wrap"
      bg="lightgray"
      justifyItems="center"
      alignItems="center"
      gap={5}
      templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
      maxWidth="700px"
    >
      {stats.map(({ label, value, color }) => (
        <PlayerCardDetails
          key={label}
          detailName={label}
          detail={value}
          isBadge
          badgeColor={color || 'teal'}
          bg="lightslategray"
          p={5}
          h="full"
          w="full"
          justify="center"
          borderRadius="5"
          width="150px"
          textAlign="center"
        />
      ))}
    </Card>
  );
};

export default PlayerStats;
