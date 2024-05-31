import { Input} from "@mui/material";

const ImageField = ({type}) => {
  return(
    <>
      <Input type={type} placeholder="Paste URL"></Input>
    </>
  )
}

export default ImageField;