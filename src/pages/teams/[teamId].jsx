import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, Text } from '@chakra-ui/react';

import Heading from '@/components/Heading/Heading';
import ImageComp from '@/components/ImageComp/ImageComp';
import Card from '@/components/Card/Card';

import { getSingleTeamWithRoster } from '@/redux/teams';
import { MESSAGES } from '@/constants';

const Team = () => {
  const {
    query: { teamId },
    isReady,
  } = useRouter();
  const dispatch = useDispatch();
  const teamData = useSelector(state => state.team.currentTeam);

  const { teamPage } = MESSAGES;

  useEffect(() => {
    if (!isReady) return;
    dispatch(getSingleTeamWithRoster(teamId));
  }, [teamId, isReady]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Card bg="lightslategray" color="white">
      <Flex gap={5} my={5}>
        <ImageComp name={teamData?.name} src={teamData?.logoUrl} />
        <Flex direction="column" gap={5}>
          <Heading message={teamData?.name} mb="0" fontWeight="bold" />
          <Flex gap={5}>
            <Text>
              <Text as="span" fontWeight="bold">
                {teamPage.conference}
              </Text>
              {teamData.conference?.name}
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                {teamPage.division}
              </Text>
              {teamData.division?.name}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Team;
