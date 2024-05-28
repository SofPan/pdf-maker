import ColorSelector from "../ColorSelector/ColorSelector";
import ImageUploader from "../ImageUploader/ImageUploader";
import TextFieldWrapper from "../GeneralComponents/TextFieldWrapper";
import CreateEntry from "../CreateEntry/CreateEntry";

const CreatePDF = () => {
  return(
    <>
      <ImageUploader />
      <ColorSelector />
      <TextFieldWrapper placeholder="Title" />
      <TextFieldWrapper placeholder="Intro" />
      <CreateEntry />
    </>
  )
}

export default CreatePDF;