import { Box, ThemeProvider, Typography, createTheme, useMediaQuery } from "@mui/material";
import React from "react";

import NavMobile from "./nav-mobile";
import { Link } from "react-router-dom";
import theme from "../routes/theme";

const Header = () => {
  const themes = createTheme({
    typography: {
      fontFamily: [
        'Oleo Script', // Add Oleo Script as a font family
       
      ].join(','),
    },
  });
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{   width: "100%", position: "fixed" , left: "0", bgcolor: "#025444", zIndex: "999"  , boxShadow: "1px 1px 1px #2EBF70"}}>
       <NavMobile/>
      <Box
        sx={{
        
          display: isMobile ? "none" : isTablet ? "none" : "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", width: "50%" ,  }}>
          <Box sx={{ display: "flex", width: "100%" ,  }}>
            <Link
              to="/checklist"
              style={{
                paddingLeft: 13,
                textDecoration: "none",
                color: "#bbc2ce",
              }}
            >
              <Typography
                sx={{
                  position: "relative",
                  color: "#bbc2ce",
                  padding: "0.5rem", // Changed 'p' to 'padding'
                  transition: "color 0.3s",
                  fontSize: "1.1rem",
                  "&:hover": {
                    color: "#2EBF70",
                  },
                  "::before": {
                    content: "''",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "#2EBF70",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s",
                  },
                  "&:hover::before": { 
                    transform: "scaleX(1)",
                   width:" 100%",
                   transition: "transform 0.3s",
                  },
               
                }}
              >
                Home
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Link
              to="/checklist"
              style={{
                paddingLeft: 13,
                textDecoration: "none",
                color: "#616f8e",
              }}
            >
              <Typography
                sx={{
                  position: "relative",
                  color: "#bbc2ce",
                  p: "0.5rem",
                  transition: "color 0.3s",
                  fontSize: "1.1rem",
                  "&:hover": {
                    color: "#2EBF70",
                  },
                  "::before": {
                    content: "''",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "#2EBF70",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s",
                  },
                  "&:hover::before": { 
                    transform: "scaleX(1)",
                   width:" 100%",
                   transition: "transform 0.3s",
                  },
               
                }}
              >
                About
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Link
              to="/checklist"
              style={{
                paddingLeft: 13,
                textDecoration: "none",
                color: "#616f8e",
              }}
            >
              <Typography
                sx={{
                  position: "relative",
                  color: "#bbc2ce",
                  p: "0.5rem",
                  transition: "color 0.3s",
                  fontSize: "1.1rem",
                  "&:hover": {
                    color: "#2EBF70",
                  },
                  "::before": {
                    content: "''",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "#2EBF70", 
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s",
                  },
                  "&:hover::before": { 
                    transform: "scaleX(1)",
                   width:" 100%",
                   transition: "transform 0.3s",
                  },
               
                }}
              >
                Services
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Link
              to="/checklist"
              style={{
                paddingLeft: 13,
                textDecoration: "none",
                color: "#616f8e",
              }}
            >
              <Typography
                sx={{
                  position: "relative",
                  color: "#bbc2ce",
                  p: "0.5rem",
                  transition: "color 0.3s",
                  fontSize: "1.1rem",
                  "&:hover": {
                    color: "#2EBF70",
                  },
                  "::before": {
                    content: "''",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "#2EBF70", 
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s",
                  },
                  "&:hover::before": { 
                    transform: "scaleX(1)",
                   width:" 100%",
                   transition: "transform 0.3s",
                  },
               
                }}
              >
                Portfolio
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Link
              to="/checklist"
              style={{
                paddingLeft: 13,
                textDecoration: "none",
                color: "#616f8e",
              }}
            >
              <Typography
                sx={{
                  position: "relative",
                  color: "#bbc2ce",
                  p: "0.5rem",
                  transition: "color 0.3s",
                  fontSize: "1.1rem",
                  "&:hover": {
                    color: "#2EBF70",
                  },
                  "::before": {
                    content: "''",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "#2EBF70", 
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s",
                  },
                  "&:hover::before": { 
                    transform: "scaleX(1)",
                   width:" 100%",
                   transition: "transform 0.3s",
                  },
               
                }}
              >
                Blogs
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Link
              to="/checklist"
              style={{
                paddingLeft: 13,
                textDecoration: "none",
                color: "#616f8e",
              }}
            >
              <Typography
                sx={{
                  position: "relative",
                  color: "#bbc2ce",
                  p: "0.5rem",
                  transition: "color 0.3s",
                  fontSize: "1.1rem",
                  "&:hover": {
                    color: "#2EBF70",
                  },
                  "::before": {
                    content: "''",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "#2EBF70", 
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s",
                  },
                  "&:hover::before": { 
                    transform: "scaleX(1)",
                   width:" 100%",
                   transition: "transform 0.3s",
                  },
               
                }}
              >
                Contact
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Link
              to="/checklist"
              style={{
                paddingLeft: 13,
                textDecoration: "none",
                color: "#BBC2CE",
              }}
            >
              <Typography
                sx={{
                   position: "relative",
                  color: "#bbc2ce",
                  p: "0.5rem",
                  transition: "color 0.3s",
                  fontSize: "1.1rem",
                  "&:hover": {
                    color: "#2EBF70",
                  },
                  "::before": {
                    content: "''",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "#2EBF70", 
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s",
                  },
                  "&:hover::before": { 
                    transform: "scaleX(1)",
                   width:" 100%",
                   transition: "transform 0.3s",
                  },
               
                }}
              >
                Courses
              </Typography>
            </Link>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "end", width: "50%" }}>
          <Link
            to="/"
            style={{
              paddingLeft: 13,
              textDecoration: "none",
              color: "#616f8e",
            }}
          >
             <ThemeProvider theme={themes}>
      <Typography
        variant="body1"
        sx={{
           position:  "relative",
          fontFamily: 'Oleo Script', 
          color: '#616f8e',
          px: '1.5rem',
          transition: 'color 0.3s',
          fontSize: '2.1rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          background: "linear-gradient(120deg, #2EBF70 20.69%, #7644FF 50.19%, #FD4766 79.69%)",
              backgroundClip:"text",
              textFillColor: "transparent",
        
          "::before": {
            content: "''",
            position: "absolute",
            bottom: 0,
            display: "block",
            left: 0,
            width: "100%",
            height: "6px",
            backgroundColor: "#2EBF70",
           
          },
         
        }}
      >
        Akbar M
      </Typography>
    </ThemeProvider>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
