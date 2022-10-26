import getPlayerImageUrl from '@/utils/getPlayerImageUrl';
import { PLAYER_IMAGE_URLS } from '@/constants';

const { imageBase } = PLAYER_IMAGE_URLS;

describe('getPlayerImageUrl', () => {
  test('should return the correct url', () => {
    const expectedResult =
      'https://assets.nhle.com/mugs/nhl/20192020/PHI/8481178.png';

    const result = getPlayerImageUrl(
      { teamAbbr: 'PHI', playerId: '8481178' },
      imageBase,
    );

    expect(typeof result).toEqual('string');
    expect(result).toEqual(expectedResult);
  });
});
