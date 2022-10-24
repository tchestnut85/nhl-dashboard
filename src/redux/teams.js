import {
  getAllTeams as fetchAllTeams,
  getSingleTeamWithRoster as fetchSingleTeamWithRoster,
} from '@/api/teamsRequest';
import getImageUrl from '@/utils/getImageUrl';

import { TEAM_LOGO_URL } from '@/constants';

const { urlBase: imageUrlBase, idTemplate: imageIdTemplate } = TEAM_LOGO_URL;

// action types
export const GET_ALL_TEAMS = 'GET_ALL_TEAMS';
export const SET_SINGLE_TEAM = 'SET_SINGLE_TEAM';
export const SET_TEAM_ERROR = 'SET_TEAM_ERROR';

// action creators
export const getAllTeams = () => async dispatch => {
  try {
    const {
      data: { teams: teamsData },
    } = await fetchAllTeams();

    const teams = teamsData.map(currentTeam => ({
      ...currentTeam,
      logoUrl: getImageUrl(currentTeam.id, imageUrlBase, imageIdTemplate),
    }));

    dispatch({ type: GET_ALL_TEAMS, payload: teams });
  } catch (err) {
    dispatch({ type: SET_TEAM_ERROR, payload: err.message });
    console.error(err);
  }
};

export const getSingleTeamWithRoster = id => async dispatch => {
  try {
    const {
      data: { teams },
    } = await fetchSingleTeamWithRoster(id);

    const team = {
      ...teams[0],
      logoUrl: getImageUrl(teams[0].id, imageUrlBase, imageIdTemplate),
      roster: teams[0].roster.roster,
    };

    dispatch({
      type: SET_SINGLE_TEAM,
      payload: team,
    });
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
        currentTeam: payload,
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
