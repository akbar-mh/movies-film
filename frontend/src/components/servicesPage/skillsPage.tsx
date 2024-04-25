import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./ScrollEffect.css"; // Create a CSS file for styling
import Skills from "./skill/skill";
import { Box, Typography, useMediaQuery } from "@mui/material";
import theme from "../../routes/theme";
import { slideInFromTop } from "../../utils/motion";
import ParentComponent from "./education/parentComponent";

  const ScrollEffect: React.FC = () => {
  const controls = useAnimation();

  // Function to trigger animation when the element is in the viewport
  const handleScroll = () => {
    const element = document.querySelector(".scroll-effect-element");
    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight) {
        controls.start({ opacity: 1, y: 0 });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        mt: "2.5rem",
        
      }}
    >
      <motion.div
        className="scroll-effect-element"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        style={{
          width: isTablet ? "100%" : "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "15px",
          
        }}
      >
        <Box sx={{}}>
          <motion.div variants={slideInFromTop} style={{}}>
            {/*  <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> */}
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontFamily: "Oleo Script",
                color: "#bbc2ce",
                transition: "color 0.3s",
                fontSize: "2.3rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                textAlign: "start",
              }}
            >
              EDUCATION & SKILLS
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "150px",
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
          <ParentComponent />
        </Box>
      </motion.div>

      <Skills />
    </Box>
  );
}

export default ScrollEffect;
