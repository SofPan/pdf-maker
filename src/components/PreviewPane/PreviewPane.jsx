import { Box } from "@mui/material";
import Hero from "../Hero/Hero";
import Pages from "../Page/Pages";

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
      <Pages />
    </Box>
  )
}

export default PreviewPane;