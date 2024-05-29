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
      {/* <TextFieldWrapper placeholder="Intro" /> */}
      {/* <CreateEntry /> */}
      {/* <Button>Save as PDF</Button> */}
    </Box>
  )
}

export default CreatePDF;