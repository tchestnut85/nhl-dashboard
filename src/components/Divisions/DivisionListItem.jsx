import Link from 'next/link';
import { Text, ListItem, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import ImageLogo from '@components/ImageLogo/ImageLogo';

import { NHL_API_URL } from '@constants';

const DivisionListItem = ({ team }) => (
  <ListItem key={team.teamName}>
    <Flex>
      <ImageLogo name={team.name} />
      <Link href={`${NHL_API_URL.teams}${team.teamName.toLowerCase()}`}>
        <a>
          <Text fontSize="xl">{team.name}</Text>
        </a>
      </Link>
    </Flex>
  </ListItem>
);

DivisionListItem.propTypes = {
  team: PropTypes.shape({}).isRequired,
};

export default DivisionListItem;
