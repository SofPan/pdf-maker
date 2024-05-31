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
    <Box>
      <h2>{pageTitle}</h2>
      {filterAndMapEntries}
    </Box>
  )
}

export default Page;