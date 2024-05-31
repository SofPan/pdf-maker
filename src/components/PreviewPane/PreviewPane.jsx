import { Box } from "@mui/material";
import Hero from "../Hero/Hero";
import Pages from "../Page/Pages";

const PreviewPane = () => {
  return(
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: "5px solid navy",
        padding: "12px",
        aspectRatio: "16/9",
        maxWidth: "50vw"
      }}
    >
      <Hero />
      <Pages />
    </Box>
  )
}

export default PreviewPane;