import ColorSelector from "../ColorSelector/ColorSelector";
import ImageUploader from "../ImageUploader/ImageUploader";
import TextFieldWrapper from "../GeneralComponents/TextFieldWrapper";
import CreateEntry from "../CreateEntry/CreateEntry";
import { Box, Button } from "@mui/material";

const CreatePDF = () => {
  return(
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <ImageUploader />
      <ColorSelector />
      <TextFieldWrapper placeholder="Title" />
      <TextFieldWrapper placeholder="Intro" />
      <CreateEntry />
      <Button>Save as PDF</Button>
    </Box>
  )
}

export default CreatePDF;