import { TextField } from "@mui/material"
import DynamicButton from "./DynamicButton";
import { useState } from "react";

const TextFieldWrapper = (props) => {
  const {placeholder, stateAction} = props;

  const [payload, setPayload] = useState({});
  const [fieldValue, setFieldValue] = useState("");

  const handleChange = (e) => {
    setPayload({
      payload: e.target.value,
      stateAction: stateAction
    });

    setFieldValue(e.target.value);
  }

  const handleClear = () => {
    setFieldValue("");
  }
  return(
    <>
      <TextField placeholder={placeholder} onChange={handleChange} value={fieldValue} />
      <DynamicButton text="Save" type="edit" payload={payload} callback={handleClear} />
      <DynamicButton text="Cancel" type="cancel" callback={handleClear}/>
    </>
  )
}

export default TextFieldWrapper;