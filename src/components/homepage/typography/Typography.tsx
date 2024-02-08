import {
  Box,
  ListItemText,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

import theme from "../../../routes/theme";
import { slideInFromLeft, slideInFromTop } from "../../../utils/motion";
import MyCVComponent from "../cv";

const Typographys = () => {
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: isTablet ? "100%" : "49%",
      
      }}
    >
      <Box sx={{  }}>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontFamily: "Oleo Script",
              color: "#bbc2ce",
              p: "0.5rem",
              transition: "color 0.3s",
              fontSize: "2.1rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              background:
                "linear-gradient(120deg, #2EBF70 20.69%, #7644FF 50.19%, #FD4766 79.69%)",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            I am Akbar Mohammadi
          </Typography>
        </motion.div>
        <motion.div variants={slideInFromLeft(0.5)}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              width: "350px",
              fontFamily: "",
              color: "#bbc2ce",
              px: "0.5rem",
              transition: "color 0.3s",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              background:
                "linear-gradient(120deg, #1C99FE 20.69%, #7644FF 50.19%, #FD4766 79.69%)",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Front End Developer
          </Typography>
          {/*   <Typography
            sx={{
              fontFamily: "",
              color: "#bbc2ce",
              px: "0.5rem",
              transition: "color 0.3s",
              fontSize: "1rem",
              display: "flex",
              fontWeight:"500",
              textTransform: "",
            }}
          >
            Providing
            <Typography
             sx={{
              background: "linear-gradient(120deg, #1C99FE 20.69%, #7644FF 50.19%, #FD4766 79.69%)",
              backgroundClip:"text",
              textFillColor: "transparent",
              width: "100px",
               ml: "5px"
             }}>
              {" "}
                the best
            </Typography>
            project exprience
          </Typography> */}
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          style={{
            fontFamily: "",
            color: "#bbc2ce",
            padding: "0.5rem",
            transition: "color 0.3s",
          }}
        >
          A website with good design should not only look good, but it should
          also be functional, providing the user with a positive experience.
        </motion.p>
          <MyCVComponent/>
      </Box>
    </motion.div>
  );
};

export default Typographys;
