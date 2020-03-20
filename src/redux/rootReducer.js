import { INCREMENT, DECREMENT, CHANGE_THEME, LOCK_UI } from "./types";
import { combineReducers } from "redux";

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  }

  return state;
}

const initialThemeState = {
  value: "light"
};

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME: {
      return { ...state, value: action.payload };
    }
    default:
      return state;
  }

  return state;
}

const initialLockUIState = {
  value: true
};

function lockUIReducer(state = initialLockUIState, action) {
  switch (action.type) {
    case LOCK_UI: {
      return { ...state, value: action.payload };
    }
    default:
      return state;
  }
  return state;
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  lockUI: lockUIReducer
});
