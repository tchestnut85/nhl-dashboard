import { TEAM_LOGO_URL } from '@constants';

const { urlBase, idTemplate } = TEAM_LOGO_URL;

export default function getTeamLogoUrl(teamId) {
  const url = urlBase.replace(idTemplate, String(teamId));
  return url;
}
