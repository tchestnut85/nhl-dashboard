import { PLAYER_IMAGE_URLS } from '@/constants';

const { imageBase } = PLAYER_IMAGE_URLS;

export default function getPlayerImageUrl(
  { teamAbbr, playerId },
  base = imageBase,
) {
  const url = `${base}/${teamAbbr}/${playerId}.png`;

  return url;
}
