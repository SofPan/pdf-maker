import ColorSelector from "../ColorSelector/ColorSelector";
import ImageUploader from "../ImageUploader/ImageUploader";
import TextFieldWrapper from "../GeneralComponents/TextFieldWrapper";
import CreateEntry from "../CreateEntry/CreateEntry";
import { Box, Button, TextareaAutosize } from "@mui/material";

const CreatePDF = () => {
  return(
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: "45%",
        marginRight: "64px",
        border: '5px solid green',
        padding: '24px'
      }}
    >
      {/* <ImageUploader /> */}
      {/* <ColorSelector /> */}
      <TextFieldWrapper placeholder="Title" stateAction="hero_title" />
      <TextFieldWrapper placeholder="Introductory Paragraph" stateAction="hero_description" min={4} />
      {/* <CreateEntry /> */}
      {/* <Button>Save as PDF</Button> */}
    </Box>
  )
}

export default CreatePDF;