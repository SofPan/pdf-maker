import { useState } from "react";
import SaveAndCancelButtons from "../GeneralComponents/DynamicButton";
import FormControls from "./FormControls";
import ImageField from "./ImageField";
import UploadButton from "./UploadButton";

const ImageUploader = () => {
  const [fieldType, setFieldType] = useState("url");

  const handleFieldChange = (fieldValue) => {
    setFieldType(fieldValue);
  }
  return (
    <form>
      <FormControls handleFieldChange={handleFieldChange} />
      <ImageField type={fieldType} /> 

      {/* <ImageUrlField /> */}
      {/* <UploadButton />
      <SaveAndCancelButtons /> */}
    </form>
  )
}

export default ImageUploader;