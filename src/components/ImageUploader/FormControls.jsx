import { FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup } from "@mui/material";
import ImageUrlField from "./ImageUrlField";
import { useState } from "react";

const FormControls = () => {
  const fileSelect = "";
  const urlSelect = <ImageUrlField />

  const [fieldType, setFieldType] = useState(urlSelect);

  const handleChange = (e) => {
    setFieldType(e.target.value === 'url' ? urlSelect : fileSelect);
  }

  return(
    <form>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Image Source</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="url"
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel value="url" control={<Radio />} label="URL" />
          <FormControlLabel value="file" control={<Radio />} label="File Select" />
        </RadioGroup>
      </FormControl>
      {fieldType}
    </form>
  )
}

export default FormControls;