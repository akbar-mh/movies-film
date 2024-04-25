import { Box, Typography } from "@mui/material";
import React from "react";
import { slideInFromLeft } from "../../utils/motion";
import { motion } from "framer-motion";
function MyCVComponent() {
    const handleDownload = () => {
       
        const cvUrl = '/assets/folder/akbar-cv.pdf';
        
        // Create a link element
        const link = document.createElement('a');
        link.href = cvUrl;
        link.target = '_blank';
        
        // Set the link's download attribute to force download.
        link.download = 'akbar_cv.pdf';
    
     
        link.click();
      };
      return (
        <motion.div
        variants={slideInFromLeft(1)}
        style={{marginTop: "20px",}}
      >
         <Box
          onClick={handleDownload}
          sx={{
            
            width: "150px",
            height: "50px",
            position: "relative",
            transition: "0.4s",
            background: "#2EBF70",
            outline: "none",
            border: "none",
            color: "",
            '&:hover': { 
              backgroundColor: "#fff", 
              color: "#2EBF70"
            },
          }}>
         <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
             position: "absolute",
            width: "100%",
            height: "100%",
            borderRight:" 6px solid white",
            borderBottom:" 6px solid white",
            bottom:" -5px",
            right:" -5px",
            transition: "0.4s",
            "&:hover": {
              borderColor: "#2FBF71",
              
            },
          }}
        >
          Download CV
        </Typography>
         </Box>
      </motion.div>
      );
    }
    
   
    
    
    
  
  export default MyCVComponent;
  