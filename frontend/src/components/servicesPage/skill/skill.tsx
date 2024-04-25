import React from "react";
import SkillDataProvider from "../../sub/SkillDataProvider";
import SkillText from "../../sub/SkillText";
import { Frontend_skill, Other_skill } from "../../../constants";
import { Box, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../../utils/motion";
import theme from "../../../routes/theme";
const Skills: React.FC = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      id="skills"
      style={{ marginTop:isTablet? "2rem": "0rem",  width:isMobile ?"100%" :isTablet? "100%" :"50%",  transform: "scale(1)"  ,}}
     
    >
      <SkillText />
      <motion.div variants={slideInFromRight(0.5)}
        style={{marginTop: " 10px" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            mt: "4px",
            alignItems: "center",
            gap: isTablet?  "1.5rem" :"1rem",
            px: isTablet ? "0rem" : "1.5rem",
            
          }}
        >
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </Box>
      </motion.div>

      <motion.div variants={slideInFromLeft(0.5)}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          mt: "16px",
          alignItems: "center",
          gap: "1.5rem",
          px: isTablet ? "0rem" : "1.5rem",
        }}
      >
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </Box>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
