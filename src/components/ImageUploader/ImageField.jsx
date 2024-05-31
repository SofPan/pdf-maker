import { Input} from "@mui/material";

const ImageField = ({type}) => {
  return(
      <Input type={type} placeholder={`Image ${type}`}></Input>
  )
}

export default ImageField;