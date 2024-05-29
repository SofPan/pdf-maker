import { Button, Input, Select } from "@mui/material";
import TextFieldWrapper from "../GeneralComponents/TextFieldWrapper";
import ImageUploader from "../ImageUploader/ImageUploader";
import StarRatings from "./StarRatings";

// TODO: Refactor this to work with ratings
// $(':radio').change(function() {
//   console.log('New star rating: ' + this.value);
// });
const CreateEntry = () => {
  return(
    <>
      <Button>Add New Entry</Button>
      <TextFieldWrapper placeholder="Title" />
      <ImageUploader />
      <TextFieldWrapper placeholder="Description" />
      <StarRatings />
      {/* <Select>
        <option default value="select genre">An option</option>
      </Select> */}
    </>
  )
}

export default CreateEntry;