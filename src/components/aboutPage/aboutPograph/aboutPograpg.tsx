import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Animation from "../../../assets/animation.gif";
import theme from "../../../routes/theme";


const AboutPograph = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: isTablet ? "column-reverse" : "",
          flexWrap: "wrap",
          width: "100%",
          border: "1px solid red",
        }}
      >
        <Box
          sx={{
            mt: "1.5rem",
            width: isTablet ? "100%" : "50%",
            border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            px: "2rem",
          }}
        >
          <img
            src={Animation}
            alt="image login"
            style={{
              borderRadius: "",
              width: "100%",
              height: isTablet ? "300px" : "350px",
            }}
          />
        </Box>
        <Box sx={{ width: isTablet ? "100%" : "50%", px: "2rem", color: "#bbc2ce" }}>
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
          </Typography>
          <Typography variant="h4" sx={{ fontFamily: "Poppins" }}>
            I'm a Freelancer Front-end Developer
          </Typography>
          <Typography sx={{ mt: "1.3rem" }}>
            I'm a Freelancer Front-end Developer. I'm from Afghanistan. I code and create web
            elements for amazing people around the world. I like to work with new people. New
            people, new experiences.
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default AboutPograph;
