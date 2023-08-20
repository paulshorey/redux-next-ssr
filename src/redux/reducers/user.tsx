import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";

export type userState = {
  ip: string;
  city: string;
  region: string;
  country: string;
  zip: string;
  isp: string;
};
const initialState = {
  ip: "",
  city: "",
  region: "",
  country: "",
  zip: "",
  isp: "",
};

const reducer = (state: userState = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE: {
      if (!action.payload.user.ip) return state;
      return { ...state, ...action.payload.user };
    }
    case "user/data":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
