import { Flex } from '@chakra-ui/react';

import TeamCard from '@/components/TeamCard/TeamCard';
import Players from '@/components/Players/Players';

const Team = () => {
  return (
    <Flex direction="column" gap="100px" w="full" alignItems="center">
      <TeamCard />
      <Players />
    </Flex>
  );
};

export default Team;
