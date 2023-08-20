import { createStore, applyMiddleware, combineReducers, Store } from "redux";
import logger from "redux-logger";
import { createWrapper, Context } from "next-redux-wrapper";
import systemReducer, { systemState } from "./reducers/system";
import pokemonReducer, { pokemonState } from "./reducers/pokemon";
import userReducer, { userState } from "./reducers/user";

export type rootState = {
  system: systemState;
  pokemon: pokemonState;
  user: userState;
};

export const makeStore = (context: Context) => {
  const rootReducer = combineReducers({
    user: userReducer,
    pokemon: pokemonReducer,
    system: systemReducer,
  });
  return createStore(rootReducer, applyMiddleware(logger));
};

export const wrapper = createWrapper<Store<rootState>>(makeStore, { debug: true });
// export const useStore = wrapper.useWrappedStore;
