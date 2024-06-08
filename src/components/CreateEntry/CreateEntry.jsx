import { useState } from "react";
import ImageUploader from "../ImageUploader/ImageUploader";
import StarRatings from "./StarRatings";
import TextFieldWrapper from "../GeneralComponents/TextFieldWrapper";
import DynamicButton from "../GeneralComponents/DynamicButton";
import SelectGenre from "./SelectGenre";
import { Accordion, AccordionDetails, AccordionSummary, Button} from "@mui/material";

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
        <SelectGenre />
        <DynamicButton />
      </AccordionDetails>
    </Accordion>
  )
}

export default CreateEntry;