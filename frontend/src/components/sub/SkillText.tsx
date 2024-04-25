"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import { Box, Typography, useMediaQuery } from "@mui/material";
import theme from "../../routes/theme";

//import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box 
         sx={{ width: "100%",  px: isTablet ? "0rem" : "1.5rem", }}
    >
      <motion.div
        variants={slideInFromTop}
      
      >
        {/*  <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> */}
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontFamily: "Oleo Script",
            color: "#bbc2ce",
            transition: "color 0.3s",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
      SKILLS
      <Box
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            width: "100px",
            height: "3px",
            background: "#2FBF71",
            "&::before": {
              content: "''",
              position: "absolute",
              display: "flex",
              width: "10px",
              height: "10px",
              background: "#2FBF71",
              borderRadius: "50%",
              top: "50%",
              right: "0",
              transform: "translate(-0%, -50%)",
            },
          }}
        ></Box>
        </Typography>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
         style={{color:"#bbc2ce"}}
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
      style={{color:"#bbc2ce"}}
      >
        Never miss a task, deadline or idea
      </motion.div>
    </Box>
  );
};

export default SkillText;
