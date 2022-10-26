import { Flex } from '@chakra-ui/react';

import Conferences from '@/components/Conferences/Conferences';
import Heading from '@/components/Heading/Heading';

import { MESSAGES } from '@/constants';

const Teams = () => (
  <>
    <Heading
      message={MESSAGES.teamsPage.heading}
      fontFamily="Red Hat Display"
      fontWeight="bold"
    />
    <Flex as="section" w="100%" justify="space-around" gap={5} wrap="wrap">
      <Conferences />
    </Flex>
  </>
);

export default Teams;
