import nhlApiRequest from '@/utils/nhlApiRequest';
import { NHL_API_URL } from '@/constants';

export function getPlayer(id) {
  return nhlApiRequest({
    url: `${NHL_API_URL.people}${id}`,
  });
}
