import { Flex, Text } from '@chakra-ui/react';

import Conferences from '@/components/Conferences/Conferences';

import { MESSAGES } from '@/constants';

const Teams = () => (
  <Flex as="main" direction="column" w="100%" alignItems="center">
    <Text as="h2" fontSize="4xl" mb={5}>
      {MESSAGES.teamsPage.heading}
    </Text>
    <Flex as="section" w="100%" justify="space-around" gap={5} wrap="wrap">
      <Conferences />
    </Flex>
  </Flex>
);

export default Teams;
