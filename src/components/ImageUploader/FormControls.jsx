import { FormControl, FormControlLabel, FormLabel,Radio, RadioGroup } from "@mui/material";

const FormControls = ({handleFieldTypeChange}) => {

  const handleChange = (e) => {
    handleFieldTypeChange(e.target.value);
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