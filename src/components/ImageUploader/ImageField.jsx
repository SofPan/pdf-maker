import { Input} from "@mui/material";

const ImageField = ({type, handleInputValueChange}) => {
  
  const handleChange = (e) => {
    handleInputValueChange(e.target.value);
  }
  return(
      <Input onChange={handleChange} type={type} placeholder={`Image ${type}`}></Input>
  )
}

export default ImageField;