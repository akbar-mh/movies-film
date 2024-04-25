import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import theme from "../../routes/theme";
import FormComponent from "./from";

const Contact: React.FC = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
 

  return (
    <Box sx={{ py: 3 }}>
      <Box sx={{ py: 5 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Oleo Script",
            color: "#bbc2ce",
            transition: "color 0.3s",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
          id="contact"
        >
          GET IN TOUCH ME.
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
      </Box>
      <Box sx={{ color: "#bbc2ce", display: "flex", flexWrap: "wrap" }}>
        <Box sx={{ pr: "2rem", width: isTablet ? "100%" : "50%" }}>
          <Typography variant="h3" sx={{}}>
            What's your story? Get in touch
          </Typography>
          <Typography>
            Always available for freelancing if the right project comes along.
            Feel free to contact me.
          </Typography>
          <ul style={{ listStyleType: "none", marginTop: "2rem" }}>
            <li>
              <Button
                component={RouterLink}
                to="https://linkedin.com/in/akbar-kalani-m"
                sx={{}}
                target="_blank"
              >
                <FaLinkedin
                  style={{ fontSize: "2rem", marginRight: "0.5rem" }}
                />
                LinkedIn
              </Button>
            </li>
            <li>
              <Button
                component={RouterLink}
                to="https://www.youtube.com/"
                sx={{}}
                target="_blank"
              >
                <FaYoutube
                  style={{ fontSize: "2rem", marginRight: "0.5rem" }}
                />
                Youtube
              </Button>
            </li>
            <li>
              <Button
                component={RouterLink}
                to="https://instagram.com/code_by_akbar"
                sx={{}}
                target="_blank"
              >
                <FaInstagram
                  style={{ fontSize: "2rem", marginRight: "0.5rem" }}
                />
                Instagram
              </Button>
            </li>
            <li>
              <Button
                component={RouterLink}
                to="https://github.com/akbarmkalani"
                sx={{}}
                target="_blank"
              >
                <FaGithub style={{ fontSize: "2rem", marginRight: "0.5rem" }} />
                GitHub
              </Button>
            </li>
          </ul>
        </Box>
        <Box sx={{ width: isTablet ? "100%" : "50%" }}>
          <Typography variant="h4" sx={{ fontSize: "20px", fontWeight: "600" }}>
            Say Something
          </Typography>
          <FormComponent />
        </Box>
      </Box>
    </Box>
  );

  <RouterLink to="">Send Message</RouterLink>;
};

export default Contact;
