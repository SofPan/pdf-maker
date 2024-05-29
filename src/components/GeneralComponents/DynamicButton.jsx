import { Button } from "@mui/material"
import useButtons from "../../contexts/useButtons";

const DynamicButton = (props) => {
  const {
    type,
    text,
    payload,
  } = props;
  const {buttonState, buttonDispatch} = useButtons();

  const handleClick = () => {
    buttonDispatch({type: type, payload: payload});
  }
  return(
    <>
      <Button onClick={handleClick}>{text}</Button>
    </>
  )
}

export default DynamicButton;