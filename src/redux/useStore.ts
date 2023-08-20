import { rootState } from "@/redux/store";

import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector;

const useStore = (callback: (state: rootState) => any) => {
  return useTypedSelector(callback);
};
export default useStore;
