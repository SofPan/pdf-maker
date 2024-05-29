import { Box } from "@mui/material";
import Hero from "../Hero/Hero";
import Page from "../Page/Page";

const PreviewPane = () => {
  return(
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width:"50vw",
        border: "5px solid navy",
        padding: "12px"
      }}
    >
      <Hero />
      <Page />
    </Box>
  )
}

export default PreviewPane;