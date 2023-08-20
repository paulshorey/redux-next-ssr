import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";

export type systemState = {
  app: string;
  page: string;
};

const reducer = (state: systemState = { app: "init", page: "init" }, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.system };
    }
    case "APP":
      return { ...state, app: action.payload };
    case "PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export default reducer;
