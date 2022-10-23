import { getAllTeams as fetchAllTeams } from '@api/teamsRequest';

// action types
const GET_ALL_TEAMS = 'GET_ALL_TEAMS';
const SET_SINGLE_TEAM = 'SET_SINGLE_TEAM';
const SET_TEAM_ERROR = 'SET_TEAM_ERROR';

// action creators
export const getAllTeams = () => async dispatch => {
  try {
    const {
      data: { teams },
    } = await fetchAllTeams();

    dispatch({ type: GET_ALL_TEAMS, payload: teams });
  } catch (err) {
    dispatch({ type: SET_TEAM_ERROR, payload: err.message });
    console.error(err);
  }
};

const INITIAL_STATE = {
  teams: [],
  currentTeam: {},
  error: '',
};

// reducer
function teamReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_ALL_TEAMS:
      return {
        ...state,
        teams: payload,
      };
    case SET_SINGLE_TEAM:
      return {
        ...state,
        currentTeam: {
          ...payload,
          roster: payload.roster,
        },
      };
    case SET_TEAM_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}

export default teamReducer;
