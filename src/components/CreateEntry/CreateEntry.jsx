import { useContext, useEffect, useState } from "react";
import ImageUploader from "../ImageUploader/ImageUploader";
import StarRatings from "./StarRatings";
import TextFieldWrapper from "../GeneralComponents/TextFieldWrapper";
import DynamicButton from "../GeneralComponents/DynamicButton";
import SelectGenre from "./SelectGenre";
import { Accordion, AccordionDetails, AccordionSummary, Button, Input} from "@mui/material";
import { AppContext } from "../../App";

// TODO: Refactor this to work with ratings
// $(':radio').change(function() {
//   console.log('New star rating: ' + this.value);
// });
const CreateEntry = () => {
  const [expanded, setExpanded] = useState(false);
  const [entry, setEntry] = useState({});
  const {dispatch} = useContext(AppContext);

  /*
    1) Capture all the values on click save
    2) Pass entry to global state
  */
 
  useEffect(() => {
    entry.title && console.log("ready to dispatch entry", entry);
  }, [entry])

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target.elements;

    // TODO: PAUSING HERE, I NEED TO IMPLEMENT A BACK END
    setEntry({
      title: target.title.value,
      description: target.description.value,
      
    });
  }
  return(
    <Accordion
      expanded={expanded} 
      onClick={() => setExpanded(!expanded)} 
    >
      <AccordionSummary>
        <Button>Add New Entry</Button>
      </AccordionSummary>
      <AccordionDetails>
        <form onSubmit={handleSubmit}>
          <Input id="title" placeholder="Title" onClick={e => e.stopPropagation()}/>
          <Input id="description" placeholder="Description" onClick={e => e.stopPropagation()}/>

          {/* <TextFieldWrapper placeholder="Title" /> */}
          <span className="entry-image-uploader">
            <ImageUploader />
          </span>
          {/* <TextFieldWrapper placeholder="Description" min={4}/> */}
          {/* <StarRatings /> */}
          <SelectGenre />
          <Button type="submit">Save Entry</Button>
        </form>
        
      </AccordionDetails>
    </Accordion>
  )
}

export default CreateEntry;