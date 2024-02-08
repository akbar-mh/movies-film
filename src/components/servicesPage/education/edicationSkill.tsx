/*  import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import theme from "../../../routes/theme";


export const SkillsComponent = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const handleSkillClick = (e) => {
    setSelectedSkill(e);
  };

  return (
    <motion.div className="homepage">
      <Box sx={{ display: "flex", mt: "6px", flexWrap: "wrap" }}>
        <Box sx={{ width: isTablet ? "100%" : "35%" }}>
          <Paper
            elevation={selectedSkill === "Web Development" ? 3 : 0}
            onClick={() => handleSkillClick("Web Development")}
            sx={{
              textAlign: "start",
              bgcolor: "#000000",
              color: "#FFFFFF",
              p: "0.8rem",
            }}
          >
            <Typography sx={{ bgcolor: "#2EBF70", maxWidth: "max-content" }}>
              2021_2023
            </Typography>
            <Typography variant="h6" sx={{ my: "0.6rem" }}>
              Web Development
            </Typography>
            <Typography className="text-light">
              <Link
                href="https://trainingsitedesign.ir/"
                target="_blank"
                sx={{}}
              >
                Parnyan Institute
              </Link>
            </Typography>
          </Paper>
        </Box>

        <Box
          sx={{
            width: isTablet ? "100%" : "60%",
            p: isTablet ? "0rem" : "0.8rem",
            mt: isTablet ? "0.8rem" : "0rem",
          }}
        >
          {selectedSkill === "Web Development" && (
            <Typography variant="body1" sx={{ textAlign: "start" }}>
              I'm a Freelancer Front-end Developer. I code and create web
              elements for amazing people around the world. I like to work with
              new people.
            </Typography>
          )}

         
        </Box>


        <Box sx={{ width: isTablet ? "100%" : "35%" , mt:"1rem" }}>
          <Paper
            elevation={selectedSkill === "SEO Marketing" ? 3 : 0}
            onClick={() => handleSkillClick("SEO Marketing")}
            sx={{
              textAlign: "start",
              bgcolor: "#000000",
              color: "#FFFFFF",
              p: "0.8rem",
            }}
          >
            <Typography sx={{ bgcolor: "#2EBF70", maxWidth: "max-content" }}>
              2021_2023
            </Typography>
            <Typography variant="h6" sx={{ my: "0.6rem" }}>
            SEO Marketing
            </Typography>
            <Typography className="text-light">
              <Link
                href="https://trainingsitedesign.ir/"
                target="_blank"
                sx={{}}
              >
                Parnyan Institute
              </Link>
            </Typography>
          </Paper>
        </Box>

        <Box
          sx={{
            width: isTablet ? "100%" : "60%",
            p: isTablet ? "0rem" : "0.8rem",
            mt: isTablet ? "0.8rem" : "0rem",
          }}
        >
          {selectedSkill === "Web Development" && (
            <Typography variant="body1" sx={{ textAlign: "start" }}>
              I'm a Freelancer Front-end Developer. I code and create web
              elements for amazing people around the world. I like to work with
              new people.
            </Typography>
          )}

        </Box>
      </Box>
    </motion.div>
  );
};
  */

import React from "react";
import { motion } from "framer-motion";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import theme from "../../../routes/theme";

interface ListItemProps {
  item: {
    textContent: string;
    title: string;
    date: string;
    link: string;
    name: string;
  
  };
  onClick: () => void;
  selectedItem: boolean
}


 
const ListItem: React.FC<ListItemProps> = ({ item,selectedItem, onClick ,  }) => {
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      style={{ background: "#08182F",  }}
    >
      <Box sx={{ my: "1rem" , p: "8px", py: "10px" }}>
        <Typography
          variant="body2"
          sx={{
            bgcolor: "#198754",
            p:"2px",
            color: "white" ,
            maxWidth: "max-content",
            position: "relative",
            fontSize: "10px",
            "::before": {
              content: "''",
              position:" absolute",
              bottom: "-5px",
              left:" 0",
              borderLeft:" 5px solid transparent",
              borderTop: " 5px solid #165934",
              
            },
          }}
        >
          {item.date}
        </Typography>
        <Typography sx={{ textAlign: "start", mt: "8px", color: "white", fontWeight: "500" }}>{item.title}</Typography>
        <Link
          sx={{
            textAlign: "start",
            display: "flex",
            justifyContent: "start",
            textDecoration: "none",
            color: "#bbc2ce",
            fontSize: "13px", 
            mt: "15px",   maxWidth: "max-content",
          }}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.name}
        </Link>
        
     
      </Box>
      { selectedItem? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
    </motion.div>
  );
};

export default ListItem;
