import { Box, useMediaQuery } from "@mui/material";
import theme from "../../../routes/theme";
import Portfolio from "../../../assets/img.png";
import MainIcons from "../../../assets/mainIcons.svg";

import { motion, useTime, useTransform } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../../utils/motion";

const Imgpograph: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const time = useTime();
  const rotate = useTransform(time, [2, 59050], [1, 360], { clamp: false });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      style={{
        display:isTablet? "none": "flex",
        alignItems: "center",
        justifyContent: "center",
        width: isTablet ? "100%" : "50%",
        marginTop: isTablet ? "15.5rem" : "0rem",
   
      }}
    >
      <Box
        sx={{
          mt: "1rem",
          backgroundImage: `url(${""})`,
          backgroundPosition: "center",
          width: "100%",
          backgroundRepeat: "no-repeat",
         
        }}
      >
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <motion.div
            variants={slideInFromLeft(1)}
            style={{ position:  "absolute",  borderRadius: "50%" }}
          >
            <img
              src={MainIcons}
              alt="image login"
              style={{ width:isMobile? "350px": isTablet ? "470px" : "600px", }}
            />
          </motion.div>

          <motion.div
            variants={slideInFromRight(1)}
            style={{ position: "absolute" }}
          >
            <img
              src={Portfolio}
              width={430}
              height={430}
              alt="image login"
              style={{
                borderRadius: "50%",
                width: isTablet ? "320px" : "430px",
                height: isTablet ? "320px" : "430px",
              }}
            />
          </motion.div>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Imgpograph;
