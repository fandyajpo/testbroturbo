"use client";
import { useReducer, createContext, memo, useContext, ReactNode } from "react";
import { State, Action, GlobalContextType } from "../../types/Context";

const INITIAL_STATE: State = {
  id: "nwqfbuiwbf",
};

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

const Reducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case "ID":
      return {
        ...state,
        id: payload.id,
      };

    default:
      throw new Error(`${type} type is not define`);
  }
};

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useCtx = () => {
  const { state, dispatch } = useContext(GlobalContext);
  return { state, dispatch };
};

export default memo(GlobalProvider);
export { useCtx };
