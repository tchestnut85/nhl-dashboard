import { List, Text, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Card from '@components/Card/Card';
import DivisionListItem from './DivisionListItem';

import { MESSAGES } from '@constants';

const DivisionList = ({ teams }) => {
  const conference = teams[0]?.conference.name.toLowerCase();
  const division = teams[0]?.division.name.toLowerCase();
  const divisionLabel =
    MESSAGES.teamsPage.conferences[conference]?.divisions[division];

  return (
    <Card>
      <Flex direction="column" gap={5} w="250px" alignItems="center" h="100%">
        <Text as="h4" fontSize="2xl" mb={3}>
          {divisionLabel}
        </Text>
        <List spacing={5}>
          {teams.map(team => (
            <DivisionListItem key={team.id} team={team} />
          ))}
        </List>
      </Flex>
    </Card>
  );
};

DivisionList.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.shape({})),
};

export default DivisionList;
