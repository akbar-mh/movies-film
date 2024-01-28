// MovieList.js
//import { fetchMovie } from "../components/lib/data";

import { Box } from "@mui/material";
import Typographys from "./typography/Typography";
import Imgpograph from "./imageprgraph/imageprgraph";


const Homepage =  () => {
 
   /*  const { movies } = await fetchMovie();
      console.log(movies, "hello");
       */
    return (
      <Box 
         sx={{display: "flex" , flexWrap: "wrap", justifyContent: "center", mt:"1rem" , width: "100%"}}
         >
        <Typographys/>
       < Imgpograph/>
       
      </Box>
    );
 
};

export default Homepage;
