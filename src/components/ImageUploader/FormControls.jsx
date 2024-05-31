import { FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup } from "@mui/material";
import ImageField from "./ImageField";
import { useState } from "react";

const FormControls = ({handleFieldChange}) => {

  const handleChange = (e) => {
    handleFieldChange(e.target.value);
  }

  return(
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
  )
}

export default FormControls;