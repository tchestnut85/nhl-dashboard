import nhlApiRequest from '@utils/nhlApiRequest';
import { NHL_API_URL } from '@constants';

export function fetchTeamData(params = {}) {
  return nhlApiRequest({
    url: NHL_API_URL.teams,
    params: { ...(params ? params : null) },
  });
}

// get single team data by team ID

/* get single team roster by its ID with one of the follow query params:
 expand=team.roster - roster of active players for the team
 expand=person.names - same as above bu with less info. should this be team.names?
*/
