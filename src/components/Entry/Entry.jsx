import { Box } from "@mui/material";

const Entry = () => {
  // 
  return(
    <Box sx={{display: "flex"}}>
      <Box marginRight="24px">
        <img src="https://picsum.photos/150" alt="cover"/>
        <p>Ratings</p>
      </Box>
      <Box width="60%">
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consectetur asperiores inventore iste. Voluptatibus porro delectus, quam, commodi totam itaque quas deserunt impedit quos rem officiis nam qui amet repellat?</p>
      </Box>
    </Box>
  )
}

export default Entry;