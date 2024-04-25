import React from "react";
import { Box, ImageList, ImageListItem, Typography, useMediaQuery } from "@mui/material";
import Itemprojects from "../../../constants/portfolio";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slideInFromLeft } from "../../../utils/motion";
import theme from "../../../routes/theme";

const ItemsPort = () => {
 
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ py: "3rem" }}>
      <Typography
        sx={{
          fontFamily: "Oleo Script",
          color: "#bbc2ce",
          transition: "color 0.3s",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          width: "100%",
        }}
      >
        MY PORTFOLIO.
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
      <ImageList
        sx={{
          display: "flex",
         
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          
        }}
      >
        {Itemprojects.map((item) => (
          <ImageListItem
            sx={{
              mt: "1rem",
              filter: "grayscale(100%)",
              transition: " 0.4s ease-in-out",
                
              "&:hover": {
                filter: "grayscale(0)",
                transform: "scale(1)",
              },
            }}
            key={item.title}
          >
            <Link
              to={item.url}
              style={{
                position: "relative",
                color: "#bbc2ce",
                textDecoration: "none",
                
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.imgSrc}  style={{width:isMobile? "100%": isTablet? "100%": "480px", height: "250px", objectFit:"cover"}}  alt={item.title} />
              <Typography
                sx={{
                  position: "absolute",
                  bottom: "10px",
                  background: "#2EBF70",
                  px: "1rem",
                  left: "10px",
                  color: "#fff", 
                }}
              >
                {item.title}
              </Typography>
            </Link>
          </ImageListItem>
        ))}
      </ImageList>

      <motion.div
        variants={slideInFromLeft(1)}
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: "150px",
            height: "50px",
            position: "relative",
            transition: "0.4s",
            background: "#2EBF70",
            outline: "none",
            border: "none",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#2EBF70",
            },
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRight: " 6px solid white",
              borderBottom: " 6px solid white",
              bottom: " -5px",
              right: " -5px",
              transition: "0.4s",
              "&:hover": {
                borderColor: "#2FBF71",
              },
            }}
          >
            More
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ItemsPort;
