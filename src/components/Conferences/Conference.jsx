import { Stack, HStack, Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import DivisionList from '@components/Divisions/DivisionList';

const Conference = ({ label, divisions }) => {
  return (
    <HStack>
      <Stack alignItems="center" h="100%" gap={5}>
        <Text as="h3" fontSize="3xl">
          {label}
        </Text>
        <Flex gap={10} wrap="wrap" justify="center">
          {divisions.map((division, i) => (
            <DivisionList key={i} teams={division} />
          ))}
        </Flex>
      </Stack>
    </HStack>
  );
};

Conference.propTypes = {
  label: PropTypes.string.isRequired,
  divisions: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({})))
    .isRequired,
};

export default Conference;
