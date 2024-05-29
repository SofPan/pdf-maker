import { Box } from "@mui/material"
import Entry from "../Entry/Entry";

const Page = () => {
  return(
    <Box>
      <h2>Section Title</h2>
      {/* Entries */}
      <Entry />
      <Entry />
    </Box>
  )
}

export default Page;