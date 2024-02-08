import { Box, Typography } from "@mui/material";
import React from "react";
import { slideInFromLeft } from "../../utils/motion";
import { motion } from "framer-motion";
function BtnComponent() {
  return (
    <motion.div variants={slideInFromLeft(1)} style={{ marginTop: "20px" , display: "flex"  }}>
      <Box
        sx={{

          width: "150px",
          height: "50px",
          position: "relative",
          transition: "0.4s",
          background: "#2EBF70",
          outline: "none",
          border: "none",
          color: "",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#2EBF70",
          },
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRight: " 6px solid white",
            borderBottom: " 6px solid white",
            bottom: " -5px",
            right: " -5px",
            transition: "0.4s",
            "&:hover": {
              borderColor: "#2FBF71",
            },
          }}
        >
          Download CV
        </Typography>
      </Box>
      <Box 
        sx={{
          mx:"1.3rem",
          width: "150px",
          height: "50px",
          position: "relative",
          transition: "0.4s",
          background: "#2EBF70",
          outline: "none",
          border: "none",
          color: "",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#2EBF70",
          },
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRight: " 6px solid white",
            borderBottom: " 6px solid white",
            bottom: " -5px",
            right: " -5px",
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

export default BtnComponent;
