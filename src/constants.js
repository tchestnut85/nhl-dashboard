export const NHL_API_URL = {
  base: 'https://statsapi.web.nhl.com/api/v1',
  teams: '/teams/',
  people: '/people/',
};

export const TEAM_LOGO_URL = {
  urlBase:
    'http://www-league.nhlstatic.com/nhl.com/builds/site-core/d1b262bacd4892b22a38e8708cdb10c8327ff73e_1579810224/images/logos/team/current/team-{teamId}-light.svg',
  idTemplate: '{teamId}',
};

export const PLAYER_IMAGE_URLS = {
  small:
    'https://nhl.bamcontent.com/images/headshots/current/168X168/{playerId}.jpg',
  med: 'https://nhl.bamcontent.com/images/headshots/current/168X168/{playerId}@2x.jpg',
  large:
    'https://nhl.bamcontent.com/images/headshots/current/168X168/{playerId}@3x.jpg',
  base: 'https://assets.nhle.com/mugs/nhl/20192020/{team_abbreviation}/{playerId}.png',
  idTemplate: '{playerId}',
};

export const MESSAGES = {
  title: 'NHL Dashboard',
  navHeading: 'NHL Dashboard',
  teamsPage: {
    heading: 'Teams',
    conferences: {
      eastern: {
        name: 'Eastern Conference',
        divisions: {
          atlantic: 'Atlantic',
          metropolitan: 'Metropolitan',
        },
      },
      western: {
        name: 'Western Conference',
        divisions: {
          central: 'Central',
          pacific: 'Pacific',
        },
      },
    },
    divisions: {
      atlantic: 'Atlantic',
      metro: 'Metropolitan',
      central: 'Central',
      pacific: 'Pacific',
    },
  },
  teamPage: {
    conference: 'Conference: ',
    division: 'Division: ',
  },
  errors: {
    default: 'There was an error: ',
  },
};
