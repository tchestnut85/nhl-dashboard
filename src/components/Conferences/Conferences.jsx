import { useSelector } from 'react-redux';

import Conference from './Conference';

import { MESSAGES } from '@/constants';

const {
  teamsPage: {
    conferences: {
      eastern: { name: EASTERN_LABEL, divisions: EAST_DIVISIONS },
      western: { name: WESTERN_LABEL, divisions: WEST_DIVISIONS },
    },
  },
} = MESSAGES;

const Conferences = () => {
  const atlanticTeams = useSelector(state =>
    state.team.teams.filter(
      team =>
        team.division.name.toLowerCase() ===
        EAST_DIVISIONS.atlantic.toLowerCase(),
    ),
  );
  const metroTeams = useSelector(state =>
    state.team.teams.filter(
      team =>
        team.division.name.toLowerCase() ===
        EAST_DIVISIONS.metropolitan.toLowerCase(),
    ),
  );
  const centralTeams = useSelector(state =>
    state.team.teams.filter(
      team =>
        team.division.name.toLowerCase() ===
        WEST_DIVISIONS.central.toLowerCase(),
    ),
  );
  const pacificTeams = useSelector(state =>
    state.team.teams.filter(
      team =>
        team.division.name.toLowerCase() ===
        WEST_DIVISIONS.pacific.toLowerCase(),
    ),
  );

  const easternConfDivisions = [atlanticTeams, metroTeams];
  const westernConfDivisions = [centralTeams, pacificTeams];

  return (
    <>
      <Conference label={EASTERN_LABEL} divisions={easternConfDivisions} />
      <Conference label={WESTERN_LABEL} divisions={westernConfDivisions} />
    </>
  );
};

export default Conferences;
