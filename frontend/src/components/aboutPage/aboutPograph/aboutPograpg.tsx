import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Animation from "../../../assets/animation.gif";
import theme from "../../../routes/theme";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "../../../utils/motion";
import BtnComponent from "../../btnComponents/btn";

const AboutPograph: React.FC = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: isTablet ? "column-reverse" : "",
        flexWrap: "wrap",
        width: "100%",
       
      }}
    >
         <motion.div variants={slideInFromLeft(0.5)}
          style={{
            marginTop: "1.5rem",
            width: isTablet ? "100%" : "50%",
           
            display: "flex",
            justifyContent: "center",
           
          }}>
      <Box
         sx={{
          width: "100%",
         
        }} 
      >
        <img
          src={Animation}
          alt="image about"
          style={{
            borderRadius: "",
            width:isTablet ? "100%":  "90%",
            height: isTablet ? "250px" : "350px",
          }}
        />
      </Box>
      </motion.div>
      <Box
        sx={{ width: isTablet ? "100%" : "50%",  color: "#bbc2ce",  mt: "1.5rem", }}
      >
        <motion.div variants={slideInFromRight(0.5)}>
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
            About Me
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
        <motion.div variants={slideInFromTop}>
          <Typography variant="h4" sx={{ fontFamily: "Poppins" }}>
            I'm a Freelancer Front-end Developer
          </Typography>
        </motion.div>
        <motion.div variants={slideInFromRight(0.9)}>
          <Typography sx={{ mt: "1.3rem" }}>
            I&apos;m a Front End Developer Software Engineer with experience in
            Website, and Software development. Check out my projects and skills.
            I'm from Afghanistan. I code and create web elements for amazing
            people around the world. I like to work with new people. New people,
            new experiences.
          </Typography>
        </motion.div>
        <Box>
          <BtnComponent />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPograph;
