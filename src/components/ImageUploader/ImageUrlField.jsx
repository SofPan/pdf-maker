import { FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup } from "@mui/material";

const ImageUrlField = () => {
  return(
    <>
      <RadioGroup></RadioGroup>
      <Input type="file" placeholder="file path or url"></Input>
    </>
  )
}

export default ImageUrlField;