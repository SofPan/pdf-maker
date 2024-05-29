import { useReducer } from "react";
import useCreatedElements from "./useCreatedElements";

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
  const { dispatch } = useCreatedElements();

  const initialButtonState = {
    edit_state: (state) => console.log("edit state", state),
  }

  const [buttonState, buttonDispatch] = useReducer(buttonReducer, initialButtonState);

  return {
    buttonState,
    buttonDispatch
  }
}

export default useButtons;