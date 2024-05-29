import { TextField } from "@mui/material"
import DynamicButton from "./DynamicButton";

const TextFieldWrapper = (props) => {
  const {placeholder} = props;
  return(
    <>
      <TextField placeholder={placeholder}/>
      <DynamicButton text="Save" type="edit" payload="test payload"/>
      <DynamicButton text="Cancel" type="cancel"/>
    </>
  )
}

export default TextFieldWrapper;