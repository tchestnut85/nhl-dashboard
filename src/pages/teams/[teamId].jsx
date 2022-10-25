import { Flex } from '@chakra-ui/react';

import PageHeader from '@/components/PageHeader/PageHeader';
import Players from '@/components/Players/Players';
import TeamCard from '@/components/TeamCard/TeamCard';

const Team = () => (
  <Flex direction="column" gap="100px" w="full" alignItems="center">
    <PageHeader backButtonHref="/">
      <TeamCard />
    </PageHeader>
    <Players />
  </Flex>
);

export default Team;
