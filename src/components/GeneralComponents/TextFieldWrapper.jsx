import { TextField } from "@mui/material"
import DynamicButton from "./DynamicButton";
import { useState } from "react";

const TextFieldWrapper = (props) => {
  const {placeholder, stateAction} = props;

  const [payload, setPayload] = useState({});

  const handleChange = (e) => {
    setPayload({
      payload: e.target.value,
      stateAction: stateAction
    });
  }
  return(
    <>
      <TextField placeholder={placeholder} onChange={handleChange} />
      <DynamicButton text="Save" type="edit" payload={payload} />
      <DynamicButton text="Cancel" type="cancel"/>
    </>
  )
}

export default TextFieldWrapper;