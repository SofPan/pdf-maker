import { TextField } from "@mui/material"
import SaveAndCancelButtons from "./SaveAndCancelButtons";

const TextFieldWrapper = (props) => {
  return(
    <>
      <TextField placeholder={props.placeholder}/>
      <SaveAndCancelButtons text="Save" type="edit"/>
    </>
  )
}

export default TextFieldWrapper;