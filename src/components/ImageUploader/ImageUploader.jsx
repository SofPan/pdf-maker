import SaveAndCancelButtons from "../GeneralComponents/DynamicButton";
import ImageUrlField from "./ImageUrlField";
import UploadButton from "./UploadButton";

const ImageUploader = () => {
  return (
    <>
      <UploadButton />
      <ImageUrlField />
      <SaveAndCancelButtons />
    </>
  )
}

export default ImageUploader;