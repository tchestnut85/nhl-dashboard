import { Box, Button, Flex } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

import Link from '@/components/Link/Link';
import TeamCard from '@/components/TeamCard/TeamCard';
import Players from '@/components/Players/Players';

const Team = () => {
  return (
    <Flex direction="column" gap="100px" w="full" alignItems="center">
      <Flex w="full" justifyContent="center" alignContent="center" wrap="wrap">
        <Flex justify="center" alignSelf="center" flex={1}>
          <Link href="/">
            <Button
              leftIcon={<ArrowBackIcon />}
              colorScheme="blackAlpha"
              variant="solid"
            >
              Back
            </Button>
          </Link>
        </Flex>
        <TeamCard flex={1} />
        <Box flex={1} />
      </Flex>
      <Players />
    </Flex>
  );
};

export default Team;
