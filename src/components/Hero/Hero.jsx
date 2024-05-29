import { Box } from "@mui/material"

const Hero = () => {
  return(
    <Box 
      sx={{
        backgroundImage: 'url(https://picsum.photos/500/250)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:"250px"
      }}
    >
      <h1>A Title</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nesciunt corrupti delectus itaque, sint consequuntur sequi voluptatem nobis mollitia, assumenda sunt voluptatibus! Vero tempora est, molestias veritatis ex quae praesentium.</p>
    </Box>
  )
}

export default Hero;