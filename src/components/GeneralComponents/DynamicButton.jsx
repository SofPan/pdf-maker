import { Button } from "@mui/material"
import useButtons from "../../contexts/useButtons";

const DynamicButton = (props) => {
  const {
    type,
    text,
    payload,
    callback
  } = props;
  
  const {buttonState, buttonDispatch} = useButtons();

  const handleClick = () => {
    buttonDispatch({type: type, payload: payload});
    callback && callback();
  }
  return(
    <div className="btn-img">
      <Button onClick={handleClick}>{text}</Button>
    </div>
  )
}

export default DynamicButton;