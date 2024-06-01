import { Input} from "@mui/material";

const ImageField = ({type, handleInputValueChange}) => {
  
  const handleChange = (e) => {
    console.log("val", e.target.value);
    handleInputValueChange(e.target.value);
  }
  return(
      <Input onChange={handleChange} type={type} placeholder={`Image ${type}`}></Input>
  )
}

export default ImageField;