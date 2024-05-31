import { Box } from "@mui/material"
import Entry from "../Entry/Entry";
import { useContext } from "react";
import { AppContext } from "../../App";

const Page = ({pageTitle}) => {
  const {state} = useContext(AppContext);

  const filterAndMapEntries = state.entries.filter(entry => {
    return entry.section === pageTitle;
  }).map(entry => {
    return <Entry key={entry.id} entry={entry} />
  })
  return(
    <Box display="flex" flexDirection="column" alignItems="center">
      <h2>{pageTitle}</h2>
      <Box margin="0 auto" width="100%" display="flex" justifyContent="center" flexWrap="wrap">
        {filterAndMapEntries}
      </Box>
    </Box>
  )
}

export default Page;