import {
  CASTLE_DETAILS_FAIL,
  CASTLE_DETAILS_REQUEST,
  CASTLE_DETAILS_SUCCESS,
  CASTLE_LIST_FAIL,
  CASTLE_LIST_REQUEST,
  CASTLE_LIST_SUCCESS,
} from "../components/castleConstants";

export const castleListReducer = (
  state = { loading: true, castles: [] },
  action
) => {
  switch (action.type) {
    case CASTLE_LIST_REQUEST:
      return { loading: true };
    case CASTLE_LIST_SUCCESS:
      return { loading: false, castles: action.payload };
    case CASTLE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const castleDetailsReducer = (
  state = { loading: true, castle: {} },
  action
) => {
  switch (action.type) {
    case CASTLE_DETAILS_REQUEST:
      return { loading: true };
    case CASTLE_DETAILS_SUCCESS:
      return { loading: false, castle: action.payload };
    case CASTLE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
