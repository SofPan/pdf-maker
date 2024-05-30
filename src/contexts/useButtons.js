import { useContext, useReducer } from "react";
import { AppContext } from "../App";

export const ACTIONS = {
  EDIT: 'edit',
  CANCEL: 'cancel',
  DELETE: 'delete'
}

const buttonReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.EDIT:
      return state.edit_state(action.payload)
    default:
      throw new Error("Unsupported Button Type", action.type);
  }
}

const useButtons = () => {
  const { dispatch } = useContext(AppContext);

  const initialButtonState = {
    edit_state: (payload) => {
      dispatch({ type: payload.stateAction, payload: payload.payload })
    },
  }

  const [buttonState, buttonDispatch] = useReducer(buttonReducer, initialButtonState);

  return {
    buttonState,
    buttonDispatch
  }
}

export default useButtons;