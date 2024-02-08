import { Box, useMediaQuery } from "@mui/material";
import AboutPograph from "./aboutPograph/aboutPograpg";
import { motion } from "framer-motion";
import theme from "../../routes/theme";

const AboutPage = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <motion.div initial="hidden" animate="visible">
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          mt:isTablet ? "15rem" : "10.5rem",
        }}
      >
        <AboutPograph />
      </Box>
    </motion.div>
  );
};

export default AboutPage;
