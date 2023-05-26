import { Dispatch } from "react";

export interface State {
  id?: any;
}

export type Action = { type: "ID"; payload: State };

export type GlobalContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};
