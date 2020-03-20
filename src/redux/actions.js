import { INCREMENT, DECREMENT, CHANGE_THEME, LOCK_UI } from "./types";

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  };
}

export function changeLockUI(value) {
  return {
    type: LOCK_UI,
    payload: value
  };
}

export function asyncIncrement() {
  return function(dispatch) {
    console.log("lockUI");
    dispatch(changeLockUI(false));
    setTimeout(() => {
      dispatch({ type: INCREMENT });
      console.log("unlockUI");
      dispatch(changeLockUI(true));
    }, 3000);
  };
}
