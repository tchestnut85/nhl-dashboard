import { Text, ListItem, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Link from '@/components/Link/Link';
import Card from '@/components/Card/Card';
import ImageLogo from '@/components/ImageLogo/ImageLogo';

import { NHL_API_URL } from '@/constants';
import getTeamLogoUrl from '@/utils/getTeamLogoUrl';

const DivisionListItem = ({ team }) => {
  const href = `${NHL_API_URL.teams}${team.teamName.toLowerCase()}`;
  const imageSrc = getTeamLogoUrl(team.id);

  return (
    <ListItem key={team.teamName}>
      <Flex gap={5} alignItems="center">
        <Link href={href} isOverlay w="100%">
          <Card
            alignItems="center"
            gap={5}
            bg="lightslategray"
            color="white"
            fontWeight="bold"
          >
            <ImageLogo name={team.name} src={imageSrc} w={50} />
            <Text fontSize="lg">{team.name}</Text>
          </Card>
        </Link>
      </Flex>
    </ListItem>
  );
};

DivisionListItem.propTypes = {
  team: PropTypes.shape({}).isRequired,
};

export default DivisionListItem;
