import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { Box } from "@mui/material"

const Hero = () => {

  const {state} = useContext(AppContext);

  useEffect(() => {
    console.log("inside useEffect", state);
  }, [state])

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