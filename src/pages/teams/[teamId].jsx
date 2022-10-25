import { Box, Button, Flex, StylesProvider } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';

import Link from '@/components/Link/Link';
import TeamCard from '@/components/TeamCard/TeamCard';
import Players from '@/components/Players/Players';

import { clearCurrentTeam } from '@/redux/teams';

const Team = () => {
  const dispatch = useDispatch();

  const handleClearTeam = () => dispatch(clearCurrentTeam());

  return (
    <Flex direction="column" gap="100px" w="full" alignItems="center">
      <Flex w="full" justifyContent="center" alignContent="center" wrap="wrap">
        <Flex justify="center" alignSelf="center" flex={1}>
          <Link href="/" noUnderline>
            <Button
              leftIcon={<ArrowBackIcon />}
              colorScheme="blackAlpha"
              variant="solid"
              onClick={handleClearTeam}
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
