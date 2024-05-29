import { Box } from "@mui/material"
import useCreatedElements from "../../contexts/useCreatedElements";

const Hero = () => {

  const {state} = useCreatedElements();

  return(
    <Box 
      sx={{
        backgroundImage: 'url(https://picsum.photos/500/250)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:"250px"
      }}
    >
      <h1>{state.hero_title}</h1>
      <p>{state.hero_description}</p>
    </Box>
  )
}

export default Hero;