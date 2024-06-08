import { useState } from "react";
import FormControls from "./FormControls";
import ImageField from "./ImageField";
import DynamicButton from "../GeneralComponents/DynamicButton";

const ImageUploader = () => {
  const [fieldType, setFieldType] = useState("url");
  const [payload, setPayload] = useState({payload: './assets/placeholder.png', stateAction: "hero_img"});

  const handleFieldTypeChange = (fieldValue) => {
    setFieldType(fieldValue);
  }

  // TEST URL: https://picsum.photos/1000/1200

  const handleInputValueChange = (inputValue) => {
    setPayload(prev => ({
      ...prev,
      payload: fieldType === 'url' ? inputValue : ""
    }));
  }

  return (
    <form>
      {/* <FormControls handleFieldTypeChange={handleFieldTypeChange} /> */}
      <ImageField type={fieldType} handleInputValueChange={handleInputValueChange}/> 
      <DynamicButton type="edit" text="Save" payload={payload}  />
    </form>
  )
}

export default ImageUploader;