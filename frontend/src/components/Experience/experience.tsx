import { Box, Typography, useMediaQuery } from "@mui/material";
import { itemsExperience } from "../../constants/expretion";
import { motion } from "framer-motion";
import theme from "../../routes/theme";
import { CgWebsite } from "react-icons/cg";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import { useInView } from "react-intersection-observer";
interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const Experience = ({index}: Props) => {
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const { ref, inView } = useInView({
    triggerOnce: true,
  });
   const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animationDelay = 0.5;
  return (
    <motion.div
       style={{
        width: isTablet ? "100%" : "70%",
       }}
       ref={ref}
       initial="hidden"
       variants={imageVariants}
       animate={inView ? "visible" : "hidden"}
       
       transition={{ delay: animationDelay }}
    >
      <Box
        sx={{
         

          mt: "2rem",
          display: "flex",
          flexWrap: "wrap",
          color: "#bbc2ce",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Oleo Script",
            color: "#bbc2ce",
            transition: "color 0.3s",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          EXPERIENCE.
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
        {itemsExperience.map((items, index) => (
          <Box
            key={index}
            sx={{
              mt: "1rem",
              display: "flex",
              justifyContent: isTablet ? "center" : "space-between",
              flexWrap: "wrap",
              boxShadow: "1px 1px   3px #28354A",
              width: "100%",
              color: "#fff",
            }}
          >
            <motion.div
              variants={slideInFromTop}
              style={{
                width: isMobile ? "100%" : "100px",
                fontSize: "3rem",
                margin: "12px 0px",
                display: "flex",
                justifyContent: isMobile ? "center" : "start",
              }}
            >
              <CgWebsite />
            </motion.div>
            <motion.div
              variants={slideInFromLeft(1)}
              style={{
                width: isMobile ? "100%" : isTablet ? "500px" : "500px",
                margin: "12px 0px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Oleo Script",
                  color: "#bbc2ce",
                  transition: "color 0.3s",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {items.titel}
              </Typography>
              <motion.span style={{ color: "#2FBF71", fontSize: "12px" }}>
                {" "}
                {items.date}
                <Box
                  sx={{
                    display: "flex",
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "70px",
                    height: "2px",
                    background: "#F19358",
                    "&::before": {
                      content: "''",
                      position: "absolute",
                      display: "flex",
                      width: "5px",
                      height: "5px",
                      background: "#F19358",
                      borderRadius: "50%",
                      top: "50%",
                      right: "0",
                      transform: "translate(-0%, -50%)",
                    },
                  }}
                ></Box>
              </motion.span>

              <Typography>{items.dec}</Typography>
            </motion.div>
            <motion.div
              variants={slideInFromRight(1)}
              style={{
                color: "#bbc2ce",
                width: isMobile ? "100%" : isTablet ? "100%" : "200px",
                display: "flex",
                justifyContent: isTablet ? "center" : "end",
                margin: "12px 0px",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  bgcolor: "green",
                  width: "100%",
                  px: "20px",
                  textAlign: "center",
                }}
              >
                {items.time}
              </Typography>
            </motion.div>
          </Box>
        ))}
      </Box>
    </motion.div>
  );
};

export default Experience;
