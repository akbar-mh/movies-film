import React from "react";
import { Box, ImageListItem, Typography, useMediaQuery } from "@mui/material";
import theme from "../../routes/theme";
import { blogItems } from "../../constants/blog";
import styles from "./blogs.module.css"
import { motion } from "framer-motion";
const Blogs: React.FC = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
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
          width: "100%",
          my: "1rem",
        }}
      >
        LATEST BLOG.
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
      {blogItems.map((blog, index) => (
        <ImageListItem
          key={index}
          sx={{
             overflow: "hidden",
            width: isTablet ? "100%" : isMobile ? "100%" : "32%",
            mt: "2rem",
           
      
          }}
        >
          <motion.figure className={`${styles.figure}`} style={{ position: "relative", marginBottom: "" }}>
            <img
              src={blog.imageSrc}
              className={`${styles.imgCover}`}
              style={{
                width: "100%",
                objectFit: "cover",
                
                
              }}
              alt={`Blog ${index}`}
            />
            <motion.figcaption
               className={`${styles.caption}`}
              style={{
               overflow: "hidden",
                position: "absolute",
                bottom: "4px",
                right: "0px",
                background: "#08182F",
                width: "90%",
                color: "#bbc2ce",
              }}
            >
              <Typography variant="caption"
                 sx={{  color: "#bbc2ce",}}
                 >
                {" "}
                {blog.date} - {blog.commentCount} Comments
              </Typography>
              <Typography sx={{  color: "#bbc2ce",}} variant="h6" mb={1}>
                {blog.title}
              </Typography>

              <Typography
               className={`${styles.description}`}
                sx={{  color: "#bbc2ce", }}
                variant="body2"
                color="textSecondary"
                mt={1}
              >
                {blog.text}
              </Typography>
            </motion.figcaption>
          </motion.figure>
        </ImageListItem>
      ))}
    </Box>
  );
};

export default Blogs;
