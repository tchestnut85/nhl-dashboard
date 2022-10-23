import getTeamLogoUrl from '@utils/getTeamLogoUrl';

describe('getTeamLogoUrl', () => {
  const url =
    'http://www-league.nhlstatic.com/nhl.com/builds/site-core/d1b262bacd4892b22a38e8708cdb10c8327ff73e_1579810224/images/logos/team/current/team-1234-light.svg';

  test('should return the correct url when given the team ID: 1234', () => {
    const result = getTeamLogoUrl('1234');

    expect(result).toBe(String);
    expect(result).toEqual(url);
  });
});
