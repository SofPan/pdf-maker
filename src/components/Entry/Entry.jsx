import { Box } from "@mui/material";
import { determineColumns } from "../../helpers/determineColumns";

const Entry = ({entry}) => {
  
  const entryWidth = determineColumns(entry.description);
  return(
    <Box sx={{display: "inline-flex", justifyContent:"space-evenly", alignItems:"center"}} maxWidth={entryWidth}>
      <Box marginRight="24px" width="30%">
        <img width="75%" src={entry.img_src} alt={`cover for ${entry.title}`}/>
        <p>{entry.rating}</p>
      </Box>
      <Box width="60%">
        <h3>{entry.title}</h3>
        <p>{entry.description}</p>
      </Box>
    </Box>
  )
}

export default Entry;