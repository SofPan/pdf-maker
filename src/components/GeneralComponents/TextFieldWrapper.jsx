import { Box, InputLabel, TextField, TextareaAutosize } from "@mui/material"
import DynamicButton from "./DynamicButton";
import { useContext, useState } from "react";
import { AppContext } from "../../App";

const TextFieldWrapper = (props) => {
  const {placeholder, stateAction, min} = props;
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
    <Box maxWidth="500px" display="flex" flexDirection="column">
      <InputLabel>{placeholder}</InputLabel>
      <TextareaAutosize minRows={min ? min : 2} maxRows={6} placeholder={placeholder} onChange={handleChange} value={fieldValue} />
      <DynamicButton text="Clear" type="cancel" callback={handleClear}/>
    </Box>
  )
}

export default TextFieldWrapper;