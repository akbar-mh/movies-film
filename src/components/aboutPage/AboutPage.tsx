import { Box } from "@mui/material"
import AboutPograph from "./aboutPograph/aboutPograpg"


const AboutPage = () => {

    return (
        <Box 
          sx={{display: "flex" , width: "100%", justifyContent: "center", mt: "1.5rem" }}
        >
         <AboutPograph/>
        </Box>
    )                              
}

export default AboutPage