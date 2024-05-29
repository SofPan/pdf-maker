import { Button } from "@mui/material"
import useButtons from "../../contexts/useButtons";

const SaveAndCancelButtons = (props) => {
  const {
    type,
    text
  } = props;
  const {buttonState, buttonDispatch} = useButtons();

  const handleClick = () => {
    buttonDispatch({type: type, payload: 'test state'});
  }
  return(
    <>
      <Button onClick={handleClick}>{text}</Button>
      {/* <Button>Cancel</Button> */}
    </>
  )
}

export default SaveAndCancelButtons;