import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListItemText,
  TextField,
  Typography,
  makeStyles,
  useMediaQuery,
} from "@mui/material";
import theme from "../../../routes/theme";
import Portfolio from "../../../assets/img.png";
import MainIcons from "../../../assets/img06.png";

import { motion, useTime, useTransform } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../../utils/motion";
import { useEffect, useState } from "react";


const Imgpograph = () => {
  
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const time = useTime();
  const rotate = useTransform(time, [0, 59000], [0, 360], { clamp: false });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: isTablet ? "100%" : "50%",
        marginTop: isTablet? "15.5rem" : "0rem",
        
       
      }}
    >
      <Box sx={{ mt: "1rem", backgroundImage: `url(${''})`,
         backgroundPosition: 'center',
         width: "100%",
        backgroundRepeat: 'no-repeat'}}>
        <motion.div
         
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           position: "relative",
          
        
          }}
        >
      
              
            <motion.div  variants={slideInFromLeft(1)} style={{position:"absolute"  , rotate}} >
            <img src={MainIcons} alt="image login" 
              style={{  width:isTablet ? "470px": "600px" }}/> 
            </motion.div>
              

              <motion.div  variants={slideInFromRight(1)} style={{position:"absolute"}}>
              <img
              src={Portfolio}
              width={430}
              height={430}
              alt="image login"
              style={{   borderRadius: "50%", width: isTablet ? "320px" : "430px", height: isTablet? "320px" : "430px"  ,}}
            />
              </motion.div>
          
         
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Imgpograph;
