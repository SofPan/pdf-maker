import { Box } from "@mui/material"
import Entry from "../Entry/Entry";

const Page = ({pageTitle}) => {
  return(
    <Box>
      <h2>{pageTitle}</h2>
      {/* Entries */}
      <Entry />
      <Entry />
    </Box>
  )
}

export default Page;