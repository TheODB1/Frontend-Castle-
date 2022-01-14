import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  castleDetailsReducer,
  castleListReducer,
} from "./reducers/castleReducers";

const initialState = {};
const reducer = combineReducers({
  castleList: castleListReducer,
  castleDetails: castleDetailsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
