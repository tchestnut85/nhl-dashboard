export const NHL_API_URL = {
  base: 'https://statsapi.web.nhl.com/api/v1',
  teams: '/teams/',
  people: '/people/',
};

export const MESSAGES = {
  title: 'NHL Dashboard',
  navHeading: 'NHL Dashboard',
  teamsPage: {
    heading: 'All Teams',
    conferences: {
      east: {
        name: 'Eastern Conference',
        divisions: {
          atlantic: 'Atlantic',
          metro: 'Metropolitan',
        },
      },
      west: {
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
  errors: {
    default: 'There was an error: ',
  },
};
