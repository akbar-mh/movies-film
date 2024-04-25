import { Box, ImageListItem, Typography, useMediaQuery } from "@mui/material";
import { itemsExperience } from "../../constants/expretion";
import { motion } from "framer-motion";
import theme from "../../routes/theme";

import imgAkbar from "../../assets/blog3.jpg";
import Experience from "./experience";
const Expr: React.FC = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      <motion.div
        style={{ display: "flex", }}
        initial="hidden"
        animate="visible"
      >
        <Experience />

        <ImageListItem
         
          sx={{
            width: isTablet ? "100%" : "30%",
            mt: "2rem",
            display: isTablet ? "none" : "flex"
            ,border: "1px solid red" 
          }}
        >
          {" "}
          <img
          
            src={imgAkbar}
            style={{ width: "100%", objectFit: "cover" }}
            alt="myPhoto"
          />
        </ImageListItem>
      </motion.div>
    </Box>
  );
};

export default Expr;
