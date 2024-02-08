import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { Typography, Box } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import theme from "../routes/theme";

const NavMobile: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [isMenuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isMenuOpen ? "open" : "closed");
  }, [isMenuOpen, controls]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      transform: "translateX(0)",
    },
    closed: {
      opacity: 0,
      transform: "translateX(-100%)",
    },
  };

  const menuItemVariants = {
    open: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5 },
    },
    closed: {
      scale: 0.5,
      opacity: 0,
      filter: "blur(10px)",
      transition: { duration: 0.5 },
    },
  };

  const menuTransition = {
    ease: [0.08, 0.65, 0.53, 0.96],
    duration: 0.6,
    stagger: {
      delay: 0.05,
      staggerChildren: 0.1,
    },
  };

  return (
    <Box
      sx={{
        position: "relative",

        width: "100%",
        bgcolor: "",
        justifyContent: "space-evenly",
        alignItems: "center",
        display: isMobile ? "inline-block" : isTablet ? "inline-block" : "none",
      }}
    >
      <Box
        sx={{
          cursor: "pointer",
          color: "#bbc2ce",
          m: "1rem",
          mx: "1.5rem",
        }}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <RiCloseLine fontSize="2rem" />
        ) : (
          <RiMenuLine fontSize="2rem" />
        )}
      </Box>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={menuTransition}
            style={{
              position: "absolute",
              top: "50px",
              width: "100%",
            }}
          >
            <motion.div variants={menuItemVariants}>
              {/* Your menu items here */}
              <AnimatedMenuItem to="/checklist" text="Home" />
              <AnimatedMenuItem to="/checklist" text="About" />
              <AnimatedMenuItem to="/checklist" text="Services" />
              <AnimatedMenuItem to="/checklist" text="Portfolio" />
              <AnimatedMenuItem to="/checklist" text="Blogs" />
              <AnimatedMenuItem to="/checklist" text="Contact" />
              <AnimatedMenuItem to="/checklist" text="Courses" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

const AnimatedMenuItem: React.FC<{ to: string; text: string }> = ({
  to,
  text,
}) => (
  <motion.div style={{ background: "#0F1924" }}>
    <Link
      to={to}
      style={{
        paddingLeft: 13,
        textDecoration: "none",
        color: "#616f8e",
      }}
    >
      <Typography
        sx={{
          color: "#bbc2ce",
          px: "1.5rem",
          transition: "color 0.3s",
          fontSize: "1.1rem",
          "&:hover": {
            color: "#2EBF70",
          },
        }}
      >
        {text}
      </Typography>
    </Link>
  </motion.div>
);

export default NavMobile;
