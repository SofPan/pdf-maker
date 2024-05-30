import { useContext } from "react";
import { AppContext } from "../../App";
import { Box } from "@mui/material"

const Hero = () => {

  const {state} = useContext(AppContext);

  return(
    <Box 
    // TODO: These will be dynamic once options are implemented
      sx={{
        backgroundImage: `url(${state.hero_img})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height:"250px"
      }}
    >
      <h1>{state.hero_title}</h1>
      <p>{state.hero_description}</p>
    </Box>
  )
}

export default Hero;