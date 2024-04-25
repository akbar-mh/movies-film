import { Box, useMediaQuery } from "@mui/material";
import AboutPograph from "./aboutPograph/aboutPograpg";
import { motion } from "framer-motion";
import theme from "../../routes/theme";
import { slideInFromRight } from "../../utils/motion";

const AboutPage: React.FC = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <motion.div initial="hidden" animate="visible"
    variants={slideInFromRight(1)}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          mt:isTablet ? "3rem" : "10.5rem",
         
        }}
      >
        <AboutPograph />
      </Box>
    </motion.div>
  );
};

export default AboutPage;
