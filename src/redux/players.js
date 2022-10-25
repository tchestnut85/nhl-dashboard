import { getPlayer as fetchPlayer } from '@/api/playerRequest';

// action types
export const SET_SINGLE_PLAYER = 'SET_SINGLE_PLAYER';
export const SET_PLAYER_ERROR = 'SET_PLAYER_ERROR';
export const CLEAR_CURRENT_PLAYER = 'CLEAR_CURRENT_PLAYER';

// action creators
export const getSinglePlayer = id => async dispatch => {
  try {
    const {
      data: {
        people: [player],
      },
    } = await fetchPlayer(id);

    dispatch({ type: SET_SINGLE_PLAYER, payload: player });
  } catch (err) {
    dispatch({ type: SET_PLAYER_ERROR, payload: err.message });
    console.error(err);
  }
};

export const clearCurrentPlayer = () => dispatch => {
  dispatch({ type: CLEAR_CURRENT_PLAYER });
};

const INITIAL_STATE = {
  currentPlayer: {},
  error: '',
};

// reducer
function playerReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_SINGLE_PLAYER:
      return {
        ...state,
        currentPlayer: payload,
      };
    case CLEAR_CURRENT_PLAYER:
      return {
        ...state,
        currentPlayer: {},
      };
    case SET_PLAYER_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}

export default playerReducer;
