"use client";

import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import { Sku } from "../models/sku";
import { Vendor } from "../models/vendor";

interface AppState {
  vendors: Vendor[];
  skus: Sku[];
}

const initialState: AppState = {
  vendors: [],
  skus: [
    {
      sku: "example-sku",
      quantity: 1,
      price: 0,
      date: new Date(),
    },
  ],
};

export enum AppActionType {
  SET_STATE = "SET_STATE",
  CLEAR_STATE = "CLEAR_STATE",
}

export type AppAction = {
  type: AppActionType;
  state?: Partial<AppState>;
};

export interface IAppContext extends AppState {
  dispatch: Dispatch<AppAction>;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<IAppContext>(initialState as IAppContext);

const { Provider } = AppContext;
export const AppProvider: React.FC<AppProviderProps> = (props) => {
  const reducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
      case AppActionType.SET_STATE:
        return { ...state, ...action.state };
      case AppActionType.CLEAR_STATE:
        return { ...initialState };
      default:
        return { ...state };
    }
  };
  const [state, dispatch] = useReducer(reducer, { ...initialState, ...props });

  return <Provider value={{ ...state, dispatch }}>{props.children}</Provider>;
};

export const useAppContext = () => useContext(AppContext);
