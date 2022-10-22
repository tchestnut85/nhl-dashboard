import nhlApiRequest from '@utils/nhlApiRequest';
import { NHL_API_URL } from '@constants';

const TEAMS_URL = NHL_API_URL.teams;

export function fetchTeamData(config = {}) {
  return nhlApiRequest({
    url: TEAMS_URL,
    ...config,
  });
}

export function getAllTeams() {
  return fetchTeamData();
}

export function getSingleTeam(id) {
  const config = {
    url: `${TEAMS_URL}${id}`,
    params: {
      expand: 'team.roster',
    },
  };
  return fetchTeamData(config);
}
