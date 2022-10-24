import getTeamLogoUrl from '@/utils/getTeamLogoUrl';

describe('getTeamLogoUrl', () => {
  test('should return the correct url when given the team ID: 1234', () => {
    const baseUrl = 'http://www-league.nhlstatic.com/nhl.com/team-{teamId}-light.svg';
    const expectedUrl = 'http://www-league.nhlstatic.com/nhl.com/team-1234-light.svg';
    const result = getTeamLogoUrl('1234', baseUrl);

    expect(typeof result).toEqual('string');
    expect(result).toEqual(expectedUrl);
  });
});
