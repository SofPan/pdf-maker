import ImageUploader from "../ImageUploader/ImageUploader";
import StarRatings from "./StarRatings";
import TextFieldWrapper from "../GeneralComponents/TextFieldWrapper";
import { Accordion, AccordionDetails, AccordionSummary, Button, Input, Select } from "@mui/material";
import { useState } from "react";
import DynamicButton from "../GeneralComponents/DynamicButton";

// TODO: Refactor this to work with ratings
// $(':radio').change(function() {
//   console.log('New star rating: ' + this.value);
// });
const CreateEntry = () => {
  const [expanded, setExpanded] = useState(false);

  return(
    <Accordion
      expanded={expanded} 
      onClick={() => setExpanded(!expanded)} 
    >
      <AccordionSummary>
        <Button>Add New Entry</Button>
      </AccordionSummary>
      <AccordionDetails>
        <TextFieldWrapper placeholder="Title" />
        <span className="entry-image-uploader">
          <ImageUploader />
        </span>
        <TextFieldWrapper placeholder="Description" min={4}/>
        <StarRatings />
        {/* <Select>
          <option default value="select genre">An option</option>
        </Select> */}
        <DynamicButton />
      </AccordionDetails>
    </Accordion>
  )
}

export default CreateEntry;