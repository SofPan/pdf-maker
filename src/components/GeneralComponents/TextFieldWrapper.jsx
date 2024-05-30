import { InputLabel, TextField } from "@mui/material"
import DynamicButton from "./DynamicButton";
import { useContext, useState } from "react";
import { AppContext } from "../../App";

const TextFieldWrapper = (props) => {
  const {placeholder, stateAction} = props;
  const { dispatch } = useContext(AppContext);

  const [fieldValue, setFieldValue] = useState("");

  const handleChange = (e) => {
    const payload = e.target.value;
    
    dispatch({type: stateAction, payload: payload});
    setFieldValue(e.target.value);
  }

  const handleClear = () => {
    setFieldValue("");
    dispatch({type: stateAction, payload: null});
  }

  return(
    <>
      <InputLabel>Title</InputLabel>
      <TextField placeholder={placeholder} onChange={handleChange} value={fieldValue} />
      {/* <DynamicButton text="Save" type="edit" payload={payload} callback={handleClear} /> */}
      <DynamicButton text="Clear" type="cancel" callback={handleClear}/>
    </>
  )
}

export default TextFieldWrapper;