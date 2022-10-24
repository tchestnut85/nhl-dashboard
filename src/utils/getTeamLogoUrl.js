import { TEAM_LOGO_URL } from '@/constants';

const { urlBase, idTemplate } = TEAM_LOGO_URL;

export default function getTeamLogoUrl(
  teamId,
  base = urlBase,
  textToReplace = idTemplate,
) {
  const url = base.replace(textToReplace, String(teamId));
  return url;
}
