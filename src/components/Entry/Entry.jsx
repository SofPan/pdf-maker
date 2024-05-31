import { Box } from "@mui/material";

const Entry = ({entry}) => {
  
  return(
    <Box sx={{display: "flex"}}>
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