import React, { createContext, Dispatch, useContext, useReducer } from "react";

type Filter = "toWatch" | "watched" | "liked";

type State = {
  filter: Filter;
};

type Action =
  | { type: "CHANGE_TO_WATCH" }
  | { type: "CHANGE_WATCHED" }
  | { type: "CHANGE_LIKED" };

type FilterDispatch = Dispatch<Action>;

export const FilterStateContext = createContext<State | null>(null);
export const FilterDispatchContext = createContext<FilterDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "CHANGE_TO_WATCH":
      return {
        ...state,
        filter: "toWatch",
      };
    case "CHANGE_WATCHED":
      return {
        ...state,
        filter: "watched",
      };
    case "CHANGE_LIKED":
      return {
        ...state,
        filter: "liked",
      };
    default:
      throw new Error("Unhandled action");
  }
}

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    filter: "toWatch",
  });

  return (
    <FilterStateContext.Provider value={state}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  );
};

// state를 쉽게 사용하기 위한 커스텀 Hooks
export const useFilterState = () => {
  const state = useContext(FilterStateContext);
  if (!state) throw new Error("Cannot find FilterProvider");
  return state;
};

export const useFilterDispatch = () => {
  const dispatch = useContext(FilterDispatchContext);
  if (!dispatch) throw new Error("Cannot find FilterProvider");
  return dispatch;
};
