import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, Text } from '@chakra-ui/react';

import Heading from '@/components/Heading/Heading';
import ImageComp from '@/components/ImageComp/ImageComp';
import Card from '@/components/Card/Card';
import PageHeaderSkeleton from '@/components/PageHeader/PageHeaderSkeleton';

import { getSingleTeamWithRoster } from '@/redux/teams';
import { MESSAGES } from '@/constants';

const TeamCard = () => {
  const {
    query: { teamId },
    isReady,
  } = useRouter();
  const dispatch = useDispatch();
  const team = useSelector(state => state.team.currentTeam);

  const containerSize = { w: '500px', h: '200px' };

  useEffect(() => {
    if (!isReady) return;
    dispatch(getSingleTeamWithRoster(teamId));
  }, [teamId, isReady]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Card bg="lightslategray" color="white" wrap="wrap" {...containerSize}>
      {!Object.keys(team).length ? (
        <PageHeaderSkeleton />
      ) : (
        <Flex gap={5} my={5}>
          <ImageComp name={team.name} src={team.logoUrl} />
          <Flex direction="column" gap={5}>
            <Heading message={team.name} mb="0" fontWeight="bold" />
            <Flex gap={5}>
              <Text>
                <Text as="span" fontWeight="bold">
                  {MESSAGES.teamPage.conference}
                </Text>
                {team.conference?.name}
              </Text>
              <Text>
                <Text as="span" fontWeight="bold">
                  {MESSAGES.teamPage.division}
                </Text>
                {team.division?.name}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Card>
  );
};

export default TeamCard;
