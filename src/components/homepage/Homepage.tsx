// MovieList.js
//import { fetchMovie } from "../components/lib/data";

import { Box, useMediaQuery } from "@mui/material";
import Typographys from "./typography/Typography";
import Imgpograph from "./imageprgraph/imageprgraph";
import theme from "../../routes/theme";


const Homepage =  () => {
   const isTablet = useMediaQuery(theme.breakpoints.down("md"));
   /*  const { movies } = await fetchMovie();
      console.log(movies, "hello");
       */
    return (
      <Box 
         sx={{display: "flex" , flexWrap: "wrap", justifyContent: "center", mt:isTablet? "0rem" : "10rem" , width: "100%"}}
         >
        <Typographys/>
       < Imgpograph/>
       
      </Box>
    );
 
};

export default Homepage;
